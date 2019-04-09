import React, { Component } from 'react';
import './Cards.scss';
import Habits1 from '../screenshots/habits1';
import Habits2 from '../screenshots/habits2';


class Card3 extends Component {
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
         window.open("http://punkt.lt/showcase/habits/public/habits");
    }

    onGitHubLink() {
        window.open("https://github.com/JustisBogus/habits/tree/master/calendar/laravel");
    }

    render() {

        let card;
        let description;


        if(this.state.cardFlipped) {
            card = <div onClick={() => this.onFlipCardBack()} className="card">
                <div className="cardContent">

                    <div className="cardTextTitle3">Client</div>
                    <div className="cardText">School Project</div>

                    <div className="cardTextTitle3">Project</div>
                    <div className="cardText"> Habit Tracking Web App</div>
                    <div className="cardTextTitle3">Technologies Used</div>
                    <div>
                        <div className="cardText">Laravel</div>
                        <div className="cardText">JavaScript</div>

                    </div>
                </div>
            </div>

            description = <div className="descriptionArea3Flipped">
                <div className="descriptionText">A Web app where users can have their personal accounts
                    and monitor their daily habits, that are displayed on a calendar.
                </div>
                <div className="screenshots">
                    <Habits1 />
                    <Habits2 />
                </div>
                <div className="descriptionLinkTop3"
                     onClick={() => this.onTryItLink()}>Try It Username: ikick@mail.com Password: login</div>
                <div className="descriptionLinkBottom3"
                     onClick={() => this.onGitHubLink()}>Code on GitHub</div>
            </div>


        } else {
            card = <div onClick={() => this.onFlipCardUp()} className="card">
                <div className="card3Title">Habits</div>
            </div>

            description = <div className="descriptionArea3">
                <div className="descriptionTitle3">Back End</div>
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

export default Card3;