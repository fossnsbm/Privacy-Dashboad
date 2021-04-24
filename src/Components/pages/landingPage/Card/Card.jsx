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
                    status: 'Inactive',
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
                    status: 'Inactive',
                    downTime: '1 Day ago',
                    lastUpdate: '2021/02/01',
                    path: '/rsvp'
                }
            ]
        }
    }
    
    componentDidMount = () =>{
        var http = require("https");

        http.get({ host: "fossnsbm.org" }, function (res) {
          if (res.statusCode == 200)
            console.log("This site is up and running!");
          else console.log("This site might be down " + res.statusCode);
        });
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


    }

    componentDidMount = () => {

        
        this.blog();
        this.forum();



    }


    blog = () => {
        var http = require("http");
 
        http.get({host: "fossnsbm.org"}, function(res){
        if( res.statusCode == 200 ){
            console.log("This site is up and running!");
            //this.setState({cardDetails[0].status:"Active"});
            document.getElementById("lblBlog").innerHTML = "<span class='badge rounded-pill bg-success'>Status: Active</span>";
        }
        else{
            console.log("This site might be down "+res.statusCode);
            document.getElementById("lblBlog").innerHTML = "<span class='badge rounded-pill bg-danger'>Status: Inactive</span>";
        }
        });
    }

    forum = () => {
        var http = require("https");
 
        http.get({host: "forum.fossnsbm.org/categories.json"}, function(res){
        if( res.statusCode == 200 ){
            console.log("This site is up and running!");
            //this.setState({cardDetails[0].status:"Active"});
            document.getElementById("lblForum").innerHTML = "<span class='badge rounded-pill bg-success'>Status: Active</span>";
        }
        else{
            console.log("This site might be down "+res.statusCode);
            document.getElementById("lblForum").innerHTML = "<span class='badge rounded-pill bg-danger'>Status: Inactiv</span>";
        }
        });
    }


    cardDetailsCommponent = () => {
        

    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </div>
        )
    }
}
