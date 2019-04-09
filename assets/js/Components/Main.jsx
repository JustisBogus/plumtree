import React, { Component } from 'react';
import './Main.scss';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Card4 from './Cards/Card4';

class Main extends Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <div>
                <div className="mainTitleName" > Justis </div>
                <div className="mainTitle"> Full stack developer, minimalist.</div>
                <div>
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </div>
            </div>
        );
    }
}

export default Main;