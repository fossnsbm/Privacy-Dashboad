import React, { Component } from 'react';

import CardItem from './CardItem';

import './CardStyle.css';

export default class Card extends Component {

    constructor(props) {
        super(props);

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
                      <CardItem  />
                    </div>
                </div>
            </div>
        )
    }
}
