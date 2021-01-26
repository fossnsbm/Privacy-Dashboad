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
                    title: 'Card Title',
                    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                },
                {
                    id: 2,
                    title: 'Card 2 Title',
                    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                },
                {
                    id: 3,
                    title: 'Card 3 Title',
                    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                },
                {
                    id: 4,
                    title: 'Card 4 Title',
                    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                },
                {
                    id: 5,
                    title: 'Card 5 Title',
                    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                },
                {
                    id: 6,
                    title: 'Card 6 Title',
                    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                }
            ]
        }
    }

    cardDetailsCommponent = () => {
        return this.state.cardDetails.map((detail) => {
            return(
                <CardItem 
                    key={detail.id}
                    title={detail.title}
                    cardText={detail.text}
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
