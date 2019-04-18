import React, { Component } from 'react';
import DeleteButton from '../Buttons/DeleteButton';


class Job extends Component {
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {


        return (
            <div>
                <div className="cvCreatorOrderNumber"> {this.props.orderNumber} </div>
                <div>
                    <input placeholder="Year you started working" onChange={(event) => this.props.handleYearInput(event.target.value, event.target.name, this.props.orderNumber)} name="startYear"
                           value={this.props.startYear}
                           className="startYearInput" id="startYear" />
                </div>
                <div>
                    <input placeholder="Year you stopped working" onChange={(event) => this.props.handleYearInput(event.target.value, event.target.name, this.props.orderNumber)} name="stopYear"
                           value={this.props.stopYear}
                           className="stopYearInput" id="stopYear" />
                </div>
                <div>
                    <input placeholder="Job Title" onChange={(event) => this.props.handleJobTitleInput(event.target.value, this.props.orderNumber)} name="title"
                           value={this.props.jobTitle}
                           className="titleInput" id="title" />
                </div>
                <div>
                    <textarea placeholder="Description Of A Job" onChange={(event) => this.props.handleJobDescriptionInput(event.target.value, this.props.orderNumber)} name="description"
                              value={this.props.jobDescription}
                              className="descriptionInput" id="description" />
                </div>
                <DeleteButton onClick={() => this.props.onDeleteJob(this.props.orderNumber)} title={"job"} />
            </div>
        );
    }
}


export default Job;