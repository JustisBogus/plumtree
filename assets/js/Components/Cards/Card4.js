import React, { Component } from 'react';
import './Cards.scss';
import Addressbook from '../screenshots/addressbook';

class Card4 extends Component {
    constructor (props) {
        super(props);

        this.state = {
            cardFlipped:false
        }
    }

    onFlipCardUp() {
        this.setState({cardFlipped:true});
    }

    onFlipCardBack() {
        this.setState({cardFlipped:false});
    }

    onTryItLink() {
         window.open("http://punkt.lt/showcase/addressbook/public/contacts");
    }

    onGitHubLink() {
        window.open("https://github.com/JustisBogus/clients/tree/master/laravel");
    }

    render() {

        let card;
        let description;


        if(this.state.cardFlipped) {
            card = <div onClick={() => this.onFlipCardBack()} className="card">
                <div className="cardContent">

                    <div className="cardTextTitle4">Client</div>
                    <div className="cardText">School Project</div>

                    <div className="cardTextTitle4">Project</div>
                    <div className="cardText"> An Address Book Web App </div>
                    <div className="cardTextTitle4">Technologies Used</div>
                    <div>
                        <div className="cardText">Laravel</div>
                    </div>
                </div>
            </div>

            description = <div className="descriptionArea4Flipped">
                <div className="descriptionText">An Address Book web app where users can have their personal accounts, create and edit their friends
                    information such as name, phone number or address.
                </div>
                <div className="screenshots">
                    <Addressbook />
                </div>
                <div className="descriptionLinkTop4"
                     onClick={() => this.onTryItLink()}>Try It Username: ikick@mail.com Password: login</div>
                <div className="descriptionLinkBottom4"
                     onClick={() => this.onGitHubLink()}>Code on GitHub</div>
            </div>


        } else {
            card = <div onClick={() => this.onFlipCardUp()} className="card">
                <div className="card4Title">Address Book</div>
            </div>

            description = <div className="descriptionArea4">
                <div className="descriptionTitle4">UX UI</div>
            </div>

        }

        return (
            <div className="cardContainer">
                <div className="cardWrap">
                    {card}
                </div>
                <div className="descriptionWrap">
                    {description}
                </div>
            </div>
        );
    }
}

export default Card4;