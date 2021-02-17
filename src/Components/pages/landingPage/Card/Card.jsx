import React, { Component } from 'react';

import CardItem from './CardItem';

import './CardStyle.css';

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardDetails: [
                {   
                    id: 1,
                    icon:'far fa-newspaper',
                    title: 'Foss Blog',
                    status: 'Active',
                    downTime: '1 Day ago',
                    lastUpdate: '2021/02/01',
                    path: '/blog'
                },
                {
                    id: 2,
                    icon:'far fa-comment-dots',
                    title: 'Foss Forum',
                    status: 'Active',
                    downTime: '1 Day ago',
                    lastUpdate: '2021/02/01',
                    path: '/forum'
                },
                {
                    id: 3,
                    icon:'far fa-envelope',
                    title: 'Mail Server',
                    status: 'Active',
                    downTime: '1 Day ago',
                    lastUpdate: '2021/02/01',
                    path: '/mailserver'
                },
                {
                    id: 4,
                    icon:'far fa-window-restore',
                    title: 'KetchUp AddOn',
                    status: 'Active',
                    downTime: '1 Day ago',
                    lastUpdate: '2021/02/01',
                    path: '/ketchup'
                },
                {
                    id: 5,
                    icon:'far fa-calendar-alt',
                    title: 'Event 404',
                    status: 'Active',
                    downTime: '1 Day ago',
                    lastUpdate: '2021/02/01',
                    path: '/event404'
                },
                {
                    id: 6,
                    icon:'far fa-window-restore',
                    title: 'RSVP App',
                    status: 'Active',
                    downTime: '1 Day ago',
                    lastUpdate: '2021/02/01',
                    path: '/rsvp'
                }
            ]
        }
    }

    cardDetailsCommponent = () => {
        return this.state.cardDetails.map((detail) => {
            return(
                <CardItem 
                key={detail.id}
                icon={detail.icon}
                title={detail.title}
                status={detail.status}
                downTime={detail.downTime}
                lastUpdate={detail.lastUpdate}
                path={detail.path}
                />
            );
        });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.cardDetailsCommponent()}
                    </div>
                </div>
            </div>
        )
    }
}
