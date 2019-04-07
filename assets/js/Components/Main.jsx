import React, { Component } from 'react';
import './Main.css';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';

class Main extends Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <div>
                <div style={mainTitle} > Main Title </div>
                <div>
                    <Card1 />
                    <Card2 />
                </div>
            </div>
        );
    }
}


  const mainTitle = {
    margin: "auto",
    fontFamily: "Helvetica sans-serif",
    fontSize: 36,
    textAlign: "center",
    }


export default Main;