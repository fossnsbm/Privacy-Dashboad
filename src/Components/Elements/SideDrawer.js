import React from 'react';
import ReactDOM from 'react-dom';
import './SideDrawer.css';
import { CSSTransition } from 'react-transition-group';
import { Navitems } from './Navitems';

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
                            <li
                                className="item-row2" key={key}
                                id={window.location.pathname === val.link ? "active2" : ""}
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
        </aside>
    </CSSTransition>;

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;