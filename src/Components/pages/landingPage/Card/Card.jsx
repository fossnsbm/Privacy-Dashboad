import React, { Component } from 'react';
import axios from 'axios';
import CardItem from './CardItem';

import './CardStyle.css';

export default class Card extends Component {


    constructor(props) {
        super(props);
        this.state = {


            cardDetails: [
                {
                    id: 1,
                    status: 'Loading',
                },
                {
                    id: 2,
                    status: 'Loading',
                },
                {
                    id: 3,
                    status: 'Loading',
                },
                {
                    id: 4,
                    status: 'Loading',
                },
                {
                    id: 5,
                    status: 'Loading',
                },
                {
                    id: 6,
                    status: 'Loading',
                }
            ]
        }
    }

    componentDidMount = () => {

        let a = this.state.cardDetails.slice(); //creates the clone of the state

        axios.get("/blog").then(response => {

            a[0].status = response.data;
            this.setState({cardDetails: a});
            
        })

        axios.get("/forum").then(response => {

            a[1].status = response.data;
            this.setState({cardDetails: a});
            
        })

        //a[0].status = stattus;
        //this.setState({cardDetails: a});

        //a[1].status = "Active";
        //this.setState({cardDetails: a});

        a[2].status = "temp";
        this.setState({cardDetails: a});

        a[3].status = "temp";
        this.setState({cardDetails: a});

        a[4].status = "temp";
        this.setState({cardDetails: a});

        a[5].status = "temp";
        this.setState({cardDetails: a});
        
    }

    cardDetailsCommponent = () => {
        return this.state.cardDetails.map((detail) => {
            return(
                <CardItem 
                    key={detail.id}
                    status={detail.status}
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


