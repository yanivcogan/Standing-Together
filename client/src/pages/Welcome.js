import React from 'react';
import "./welcome/welcome.scss";
import cookie from "js-cookie";

export default class MemberRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            permissions: {}
        }
    }
    componentDidMount() {
        this.setState({permissions: this.getPermissions()})
    }
    getPermissions(){
        const json = cookie.get("permissions");
        if(!json)
            return {};
        try{
            return JSON.parse(json);
        }
        catch (e) {
            return {}
        }
    }

    goToPage = function(page){
        this.props.history.push('/' + page)
    }.bind(this);

    render() {
        const permissions = this.state.permissions;
        return (
            <div dir={"rtl"} className={"page-wrap-welcome"}>
                <div className={"welcome-title"}>
                    <div>ברוכים הבאים</div>
                    <div>ברוכים הבאים</div>
                </div>
                <div className={"pages-wrap"}>
                    {permissions.isOrganizer?<div className="page-link" onClick={()=>{this.goToPage("Organizer")}}>
                        ניהול אנשי קשר
                    </div>:""}
                    {permissions.isOrganizer?<div className="page-link" onClick={()=>{this.goToPage("EventManagement")}}>
                        ניהול אירועים
                    </div>:""}
                    {permissions.isOrganizer?<div className="page-link" onClick={()=>{this.goToPage("EventCreation")}}>
                        אירוע חדש
                    </div>:""}
                    {permissions.isOrganizer?<div className="page-link" onClick={()=>{this.goToPage("CityManagement")}}>
                        ניהול ערים
                    </div>:""}
                    {permissions.isOrganizer?<div className="page-link" onClick={()=>{this.goToPage("CircleManagement")}}>
                        ניהול מעגלים
                    </div>:""}
                    {permissions.isOrganizer?<div className="page-link" onClick={()=>{this.goToPage("EventCategoriesManagement")}}>
                        ניהול קטגוריות אירועים
                    </div>:""}
                    {permissions.isOrganizer || permissions.isTyper?<div className="page-link" onClick={()=>{this.goToPage("Typer")}}>
                        עמוד קלדנות
                    </div>:""}
                    {permissions.isOrganizer?<div className="page-link" onClick={()=>{this.goToPage("ScanContacts")}}>
                        סריקת דפי קשר
                    </div>:""}
                </div>
            </div>
        );
    }
}