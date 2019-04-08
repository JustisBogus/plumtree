import React, { Component } from 'react';
import './Cards.scss';
import Gymapp1 from '../screenshots/gymapp1';
import Gymapp2 from '../screenshots/gymapp2';

class Card1 extends Component {
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
       // window.open("");
    }

    onGitHubLink() {
        window.open("https://github.com/JustisBogus/mobilegymapp");
        window.open("https://github.com/JustisBogus/gymtrainer");
    }

    render() {

        let card;
        let description;


    if(this.state.cardFlipped) {
        card = <div onClick={() => this.onFlipCardBack()} className="card">
            <div className="cardContent">

                    <div className="cardTextTitle1">Client</div>
                    <div className="cardText">Alto Gym</div>

                    <div className="cardTextTitle1">Project</div>
                    <div className="cardText"> Mobile Workout Sharing App </div>
                    <div className="cardTextTitle1">Technologies Used</div>
                    <div>
                        <div className="cardText">React Native</div>
                        <div className="cardText">React</div>
                        <div className="cardText">Redux</div>
                    </div>
            </div>
        </div>

        description = <div className="descriptionArea1Flipped">
            <div className="descriptionText">Gym trainer creates workouts and exercises using the workout creation
                web app and sends them to their customers mobile app
            </div>
                <div className="screenshots">
                <Gymapp2/>
                <Gymapp1/>
                </div>
            <div className="descriptionLinkTop1"
            onClick={() => this.onTryItLink()}>Try It</div>
            <div className="descriptionLinkBottom1"
            onClick={() => this.onGitHubLink()}>Code on GitHub</div>
        </div>


    } else {
        card = <div onClick={() => this.onFlipCardUp()} className="card">
            <div className="card1Title">Mobile Gym App</div>
        </div>

        description = <div className="descriptionArea1">
            <div className="description1Title">Some word</div>
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

export default Card1;