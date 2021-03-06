const eventUpdater = require('../../services/eventUpdater');
const eventFetcher = require('../../services/eventFetcher');
const Authentication = require('../../services/authentication');
module.exports = (app) => {
	app.post('/api/events', (req, res) => {
		eventUpdater.saveEvent(req, res);
	});
	app.post('/api/events/inviteByQuery', (req, res) => {
		eventUpdater.inviteByQuery(req, res);
	});
	app.get('/api/events/eventById/:id', (req, res) => {
		Authentication.hasRole(req, "isTyper").then(result=>{
			if(result.error)
				return res.json({error: result.error});
			eventFetcher.getEventById(req.params.id).then((result)=>{
				return res.json(result);
			});
		})
	});
	app.get('/api/events/eventByCode/:code', (req, res) => {
		eventFetcher.getEventByCode(req, res);
	});
	app.get('/api/events/getInviteless/', (req, res) => {
		eventFetcher.getCampaignLess(req, res);
	});
	app.post('/api/events/list', (req, res) => {
		eventFetcher.listEvents(req, res);
	});
};
