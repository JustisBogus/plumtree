import React, { Component } from 'react';
import DeleteButton from "../Buttons/DeleteButton";


class Skill extends Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {


        return (
            <div>
                <div className="cvCreatorOrderNumber" > {this.props.orderNumber} </div>
                <div>
                    <input placeholder="Skill" onChange={(event) => this.props.handleSkillTitleInput(event.target.value, this.props.orderNumber)} name="skillTitle"
                           value={this.props.jobTitle}
                           className="skillTitleInput" id="skillTitle" />
                </div>
                <DeleteButton onClick={() => this.props.onDeleteSkill(this.props.orderNumber)} title={"skill"} />
            </div>
        );
    }
}


export default Skill;