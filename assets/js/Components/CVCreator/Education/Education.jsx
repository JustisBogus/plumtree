import React, { Component } from 'react';


class Education extends Component {
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
                <div onClick={() => this.props.onDeleteEducation(this.props.orderNumber)} className="educationDelete">Delete Education</div>
            </div>
        );
    }
}


export default Education;