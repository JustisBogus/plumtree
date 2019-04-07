import React, { Component } from 'react';

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
         window.open("http://punkt.lt/showcase/ynotmedia/wide/");
    }

    onGitHubLink() {
        window.open("https://github.com/JustisBogus/offers");
    }

    render() {

        let card;
        let description;

        if(this.state.cardFlipped) {
            card = <div onClick={() => this.onFlipCardBack()} style={card2}>
                <ul>
                    <li>
                        <div>Client</div>
                        <div>YNOT-media</div>
                    </li>
                    <li>
                        <div>Project</div>
                        <div>Job Management Web App</div>
                    </li>
                    <li>
                        <div>Technologies Used</div>
                        <div>
                            <div>React</div>
                        </div>
                    </li>
                </ul>
            </div>

            description = <div style={descriptionArea}>
                <div style={descriptionLink1}
                     onClick={() => this.onTryItLink}>Try It login:ikick@mail.com password login1</div>
                <div style={descriptionLink2}
                     onClick={() => this.onGitHubLink()}>Code on GitHub</div>
            </div>


        } else {
            card = <div onClick={() => this.onFlipCardUp()} style={card2}>
                <div style={cardTitle}> Job Management Web App </div>
            </div>

            description = <div style={descriptionArea}>
                <div style={descriptionTitle}>Some word 2</div>
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

const card2 = {
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

export default Card2;