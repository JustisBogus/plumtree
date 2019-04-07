import React, { Component } from 'react';

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
        card = <div onClick={() => this.onFlipCardBack()} style={card1}>
            <ul>
                <li>
                    <div>Client</div>
                    <div>Alto Gym</div>
                </li>
                <li>
                    <div>Project</div>
                    <div>Workout Creation Mobile App</div>
                </li>
                <li>
                    <div>Technologies Used</div>
                    <div>
                        <div>React Native</div>
                        <div>React</div>
                        <div>Redux</div>
                    </div>
                </li>
            </ul>
        </div>

        description = <div style={descriptionArea}>
            <div style={descriptionLink1}
            onClick={() => this.onTryItLink}>Try It</div>
            <div style={descriptionLink2}
            onClick={() => this.onGitHubLink()}>Code on GitHub</div>
        </div>


    } else {
        card = <div onClick={() => this.onFlipCardUp()} style={card1}>
            <div style={cardTitle}> Gym Mobile App </div>
        </div>

        description = <div style={descriptionArea}>
            <div style={descriptionTitle}>Some word</div>
        </div>

    }

        return (
            <div style={card1Container}>
                <div style={cardWrap}>
                    {card}
                </div>
                    <div style={descriptionWrap}>
                        {description}
                    </div>
            </div>
        );
    }
}


const card1Container = {
    flex:1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Helvetica sans-serif",
    fontSize: 14,
    textAlign: "center",
}

const cardWrap = {
    width: "25%",
    height: 300,
}

const card1 = {
    width: 200,
    borderWidth: 1,
    borderColor: "#1594ab",
    cursor:"pointer"
}

const descriptionWrap = {
    width: "50%",
    height: 300,
}

const descriptionArea = {
    width: '100%',
    borderWidth: 1,
    borderColor: "#1594ab"
}

const descriptionTitle = {
    marginTop: 70,
}

const descriptionLink1 = {
    marginTop: 120,
    cursor:"pointer"
}
const descriptionLink2 = {
    cursor:"pointer"
}

const cardTitle = {
    marginTop: 70,
}

export default Card1;