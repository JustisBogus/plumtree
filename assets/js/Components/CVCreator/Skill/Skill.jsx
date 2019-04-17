import React, { Component } from 'react';


class Skill extends Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {


        return (
            <div>
                <div> {this.props.orderNumber} </div>
                <div>
                    <input placeholder="Skill" onChange={(event) => this.props.handleSkillTitleInput(event.target.value, this.props.orderNumber)} name="skillTitle"
                           value={this.props.jobTitle}
                           className="skillTitleInput" id="skillTitle" />
                </div>
                <div onClick={() => this.props.onDeleteSkill(this.props.orderNumber)} className="skillDelete">Delete Skill</div>
            </div>
        );
    }
}


export default Skill;