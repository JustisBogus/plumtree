import React, { Component } from 'react';
import './Cards.scss';
import Gymapp1 from '../screenshots/gymapp1';
import Gymapp2 from '../screenshots/gymapp2';
import Offers from '../screenshots/offers';
import Habits1 from '../screenshots/habits1';
import Habits2 from '../screenshots/habits2';
import Addressbook from '../screenshots/addressbook';



class Cards extends Component {
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
        if (this.props.tryLink !=='') {
            window.open(this.props.tryLink);
        }

    }

    onGitHubLink() {
        if (this.props.githubLink1 !=='') {
            window.open(this.props.githubLink1);
        }
        if (this.props.githubLink2 !=='') {
            window.open(this.props.githubLink2);
        }
    }

    render() {

        let screenshot

        if (this.props.cardNumber === 1) {
            screenshot = <div>
                        <Gymapp1/>
                        <Gymapp2/>
                        </div>
        }

        if (this.props.cardNumber === 2) {
            screenshot = <Offers/>
        }

        if (this.props.cardNumber === 3) {
            screenshot = <div>
                        <Habits1/>
                        <Habits2/>
                        </div>
        }

        if (this.props.cardNumber === 4) {
            screenshot = <Addressbook/>
        }

        let card;
        let description;

        if(this.state.cardFlipped) {
            card = <div onClick={() => this.onFlipCardBack()} className="card">
                <div className="cardContent">

                    <div style={{color:this.props.color}}
                         className="cardTextTitle">Client</div>
                    <div className="cardText">{this.props.client}</div>

                    <div style={{color:this.props.color}}
                         className="cardTextTitle">Project</div>
                    <div className="cardText"> {this.props.project}</div>
                    <div style={{color:this.props.color}}
                         className="cardTextTitle">Technologies Used</div>
                    <div>
                        <div className="cardText">{this.props.technology1}</div>
                        <div className="cardText">{this.props.technology2}</div>
                        <div className="cardText">{this.props.technology3}</div>
                    </div>
                </div>
            </div>

            description = <div className={this.props.style2}>
                <div className="descriptionText">{this.props.description}</div>
                <div className="screenshots">
                    {screenshot}
                </div>
                <div style={{color:this.props.color}}  className="descriptionLinkTop"
                     onClick={() => this.onTryItLink()}>Try It</div>
                <div style={{color:this.props.color}}  className="descriptionLinkBottom"
                     onClick={() => this.onGitHubLink()}>Code on GitHub</div>
            </div>


        } else {
            card = <div onClick={() => this.onFlipCardUp()} className="card">
                <div style={{color:this.props.color}} className="cardTitle"> {this.props.title} </div>
            </div>

            description = <div style={{color:this.props.color}}
                               className={this.props.style1}>
                <div style={{color:this.props.color}}
                     className="descriptionTitle">{this.props.descriptionTitle}</div>
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

export default Cards;