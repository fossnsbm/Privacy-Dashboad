import React from 'react';
import { Navitems } from './Navitems';
import './Sidebar.css';
import Logo from '../Images/logo.png'; 
import NoTLogo from '../Images/logo-no-title.png';
const Sidebar = () => {
    return (
        <div className="Sidebar">
           <div className="scroll">
           <div className="bar-title-main">
                <div className="bar-title-inner">
                    <img className="image-logo" src={Logo} alt="Privacy Dashboard"/ >
                    <img className="image-logo-small" src={NoTLogo} alt="Privacy Dashboard"/ >
                </div>
                <hr />
            </div>
            <div className="Slide-bar-list">
                {Navitems.map((val, key) => {
                    return (
                        <li
                            className="item-row" key={key}
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => { window.location.pathname = val.link }}
                        >
                            <div className="item-icon">{val.icon}</div>
                            <div className="item-title">
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </div>
           </div>
           <div className="copyright">
               2021 FOSS Community of NSBM
            </div>
        </div>
    )
}

export default Sidebar;
