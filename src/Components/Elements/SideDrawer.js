import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";

import { Navitems } from './Navitems';
import './SideDrawer.css';

const SideDrawer = props => {
    const content = <CSSTransition
        in={props.show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
    >
        <aside className="side-drawer" >
            <div className="side-drawer-list" >
                <div className="Slide-bar-list2 ">
                    {Navitems.map((val, key) => {
                        return (
                            <Link
                                className="item-row2" key={key}
                                to={val.link}
                                id={window.location.pathname === val.link ? "active2" : ""}
                                // onClick={() => { window.location.pathname = val.link }}
                            >
                                <div className="item-icon">{val.icon}</div>
                                <div className="item-title">
                                    {val.title}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </aside>
    </CSSTransition>;

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;