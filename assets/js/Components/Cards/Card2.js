import React, { Component } from 'react';
import './Cards.scss';
import Offers from '../screenshots/offers';

class Card2 extends Component {
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
         window.open("http://punkt.lt/showcase/ynotmedia/wide");
    }

    onGitHubLink() {
        window.open("https://github.com/JustisBogus/offers");
    }

    render() {

        let card;
        let description;

        if(this.state.cardFlipped) {
            card = <div onClick={() => this.onFlipCardBack()} className="card">
                <div className="cardContent">

                    <div className="cardTextTitle2">Client</div>
                    <div className="cardText">YNOT-media</div>

                    <div className="cardTextTitle2">Project</div>
                    <div className="cardText"> Job Management Web App</div>
                    <div className="cardTextTitle2">Technologies Used</div>
                    <div>
                        <div className="cardText">React</div>
                        <div className="cardText">React Router</div>
                        <div className="cardText">Firebase</div>
                    </div>
                </div>
            </div>

            description = <div className="descriptionArea2Flipped">
                <div className="descriptionText"> Manager creates jobs and assigns them to Media Buyers.
                    Every job has an option to be selected as active or complete,
                    includes revenue calculator, search and chat.
                </div>
                <div className="screenshots">
                    <Offers/>
                </div>
                <div className="descriptionLinkTop2"
                     onClick={() => this.onTryItLink()}>Try It Username :ikick@mail.com Password: login1</div>
                <div className="descriptionLinkBottom2"
                     onClick={() => this.onGitHubLink()}>Code on GitHub</div>
            </div>


        } else {
            card = <div onClick={() => this.onFlipCardUp()} className="card">
                <div className="card2Title"> Job Management Web App </div>
            </div>

            description = <div className="descriptionArea2">
                <div className="descriptionTitle2">Front End</div>
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

export default Card2;