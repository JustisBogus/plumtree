import React, { Component } from 'react';
import DeleteButton from "../Buttons/DeleteButton";


class Education extends Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {


        return (
            <div>
                <div className="cvCreatorOrderNumber"> {this.props.orderNumber + 1} </div>
                <div>
                    <input placeholder="Year you started studying" onChange={(event) => this.props.handleEducationYearInput(event.target.value, event.target.name, this.props.orderNumber)} name="startYear"
                           value={this.props.startYear}
                           className="startYearInput" id="startYear" />
                </div>
                <div>
                    <input placeholder="Year you stopped studying" onChange={(event) => this.props.handleEducationYearInput(event.target.value, event.target.name, this.props.orderNumber)} name="stopYear"
                           value={this.props.stopYear}
                           className="stopYearInput" id="stopYear" />
                </div>
                <div>
                    <input placeholder="Education" onChange={(event) => this.props.handleEducationTitleInput(event.target.value, this.props.orderNumber)} name="title"
                           value={this.props.jobTitle}
                           className="titleInput" id="title" />
                </div>
                <DeleteButton onClick={() => this.props.onDeleteEducation(this.props.orderNumber)} title={"education"} />
            </div>
        );
    }
}


export default Education;