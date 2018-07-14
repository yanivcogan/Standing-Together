const mongoose = require('mongoose');
const Event = require('../../models/eventModel');
const Activist = require('../../models/activistModel');

const Authentication = require('../../services/authentication');
function sortCallsByPriority (a, b, callerId, now){
	let weightA = 0;
	let weightB = 0;
	//if the activist was already assigned to some caller, give them a lower ranking
	if(a.isHandled)
		weightA -= 3;
	if(b.isHandled)
		weightB -= 3;
	//if the activist has been assigned previously (in this campaign) to this caller give them a higher ranking
	if(a.callerId===callerId)
		weightA += 2;
	if(b.callerId===callerId)
		weightB += 2;
	//if the activist has asked to be called at a later time
	if(a.availableAt)
	{
		if(a.availableAt<now)
			weightA += 3;
		else
			weightA -= 4;
	}
	//if the activist has asked to be called at a later time
	if(b.availableAt)
	{
		if(b.availableAt<now)
			weightB += 3;
		else
			weightB -= 4;
	}
	return weightB - weightA;
}
module.exports = (app) => {
	app.post('/api/call/fetchActivistsToCall', (req, res, next) => {
		Authentication.isUser(req, res).then(isUser=>{
			if(!isUser)
				return res.json({"error":"missing token"});
			const eventId = mongoose.Types.ObjectId(req.body.eventId);
			const callerId = Authentication.getMyId();
			const bulkSize= 2;
			Event.findOne({"_id": eventId}, (err, eventData) => {
				if (err) return res.json({success: false, error: err});
				if (!eventData)
					return res.json({"error":"couldn't find a matching event"});
				if (!eventData.campaign&&!eventData.campaign.invitations.length)
					return res.json({"error":"couldn't find any invited activists"});
				const now = new Date();
				const invitedActivists = eventData.campaign.invitations;
				let activistToCall = invitedActivists.filter(invite => !invite.resolution);
				activistToCall.sort((a, b)=>{return sortCallsByPriority(a, b, callerId, now)});
				const assignedActivists = activistToCall.slice(0, Math.min(activistToCall.length, bulkSize));
				const assignedActivistsIds = assignedActivists.map(function(value,index) {return value["activistId"];})
				Event.update(
					{"_id": eventId},
					{"$set": {"campaign.invitations.$[elem].isHandled": true}},
					{"arrayFilters": [{"elem.activistId":{$in:assignedActivistsIds}}], "multi": true },
					(err, result) => {
					}
				);
				Activist.find({_id:{$in:assignedActivistsIds}}, (err, activists) => {
					if (err) return res.json({success: false, error: err});
					activistsList = [];
					for(let activist of activists)
					{
						activistsList.push({
							"_id":activist._id,
							"phone":activist.profile.phone,
							"email":activist.profile.email,
							"firstName":activist.profile.firstName,
							"lastName":activist.profile.lastName,
							"city":activist.profile.residency,
							"lastEvent":activist.profile.participatedEvents[activist.profile.participatedEvents.length-1]
						});
					}
					return res.json(activistsList);
				});
			});
		})
	});
	
	app.post('/api/call/resolveCall', (req, res, next) => {
		Authentication.isUser(req, res).then(isUser=>{
			if(!isUser)
				return res.json({"error":"missing token"});
			const eventId = mongoose.Types.ObjectId(req.body.eventId);
			const activistId = mongoose.Types.ObjectId(req.body.activistId);
			const callerId = Authentication.getMyId();
			const now = new Date();
			const resolution = {
				attendingEvent: req.body.attendingEvent,
				contributed: req.body.contributed
			};
			Event.update(
				{"_id": eventId},
				{
					"$set": {
						"campaign.invitations.$[i].lastCallAt": now,
						"campaign.invitations.$[i].resolution": resolution
					}
				},
				{"arrayFilters": [{"i.activistId":activistId}], "multi": false},
				(err, result) => {
					return res.json({"err":err, "result":result});
				}
			);
		});
	});
	app.post('/api/call/postponeCall', (req, res, next) => {
		Authentication.isUser(req, res).then(isUser=>{
			if(!isUser)
				return res.json({"error":"missing token"});
			const eventId = mongoose.Types.ObjectId(req.body.eventId);
			const activistId = mongoose.Types.ObjectId(req.body.activistId);
			const callerId = Authentication.getMyId();
			const now = new Date();
			const availableAt = req.body.availableAt;
			Event.update(
				{"_id": eventId},
				{
					"$set": {
						"campaign.invitations.$[elem].lastCallAt": now,
						"campaign.invitations.$[elem].resolution": resolution
					}
				},
				{"arrayFilters": [{"elem.activistId":activistId}], "multi": true},
				(err, result) => {
					return res.json({"err":err, "result":result});
				}
			);
		});
	});
};
