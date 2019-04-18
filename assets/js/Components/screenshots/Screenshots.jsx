import React from 'react';
import Addressbook from '../../../screenshots/addressbook2.png';
import Gymapp1 from "../../../screenshots/gymapp1.png";
import Gymapp2 from "../../../screenshots/gymapp2.png";
import Offers1 from "../../../screenshots/offers1.png";
import Habits1 from "../../../screenshots/habits1.png";
import Habits2 from '../../../screenshots/habits2.png';
import './Screenshots.scss';


const Screenshot = props => {
    if (props.screenshot === 1) {
        return <React.Fragment> <div className="gymapp">
            <img src={Gymapp1} alt="gymapp"/></div>
            <div className="gymapp">
            <img src={Gymapp2} alt="gymapp"/>
            </div>
              </React.Fragment>
    }
    if (props.screenshot === 2) {
        return <div className="offers">
            <img src={Offers1} alt="offers"/>
        </div>
    }
    if (props.screenshot === 3) {
        return <React.Fragment> <div className="habits">
            <img src={Habits1} alt="habits"/>
            </div>
                <div className="habits">
            <img src={Habits2} alt="habits"/>
               </div>
            </React.Fragment>
    }
    if (props.screenshot === 4) {
        return <div className="addressbook">
            <img src={Addressbook} alt="addressbook"/>
        </div>
    }
}

export default Screenshot;