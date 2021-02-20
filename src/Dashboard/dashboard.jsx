import React from 'react';
import './resources/dash.css'
import usersLogo from './resources/images/m.PNG'
import avatarWithArrow from './resources/images/avatarWithArrow.PNG'
import copyright from './resources/images/copyright.PNG'
import { ReportPage } from '../Reports/reports'
export class DashboardPage extends React.Component {
    render() {
        return (
            <div className="dashContainer">
                <div className="header">
                    <img src={avatarWithArrow} width='55px' alt="userSettings" />
                </div>
                <div className="sidemenu">
                    <div className="userImg"><img src={usersLogo} alt="userLogo" width="26px" /></div>
                </div>
                <div className="main">
                    <ReportPage />
                </div>
                <div className="footer">
                    <img src={copyright} alt="copyright" />
                </div>
            </div>


        )
    }
}
