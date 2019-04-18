import React, { Component } from 'react';
import './CVCreator.scss';
import { connect } from 'react-redux';
import { addName, addEmail, addAddress, addAbout, addJob,
         deleteJob, addStartYear, addStopYear, addJobTitle,
         addJobDescription, addSkill, deleteSkill, addSkillTitle,
         addEducation, deleteEducation, addEducationStartYear,
         addEducationStopYear, addEducationTitle
            } from '../../store/actions/cv';
import Job from './Job/Job';
import Skill from './Skill/Skill';
import Education from './Education/Education';
import About from '../CVCreator/About/About';
import AddButton from './Buttons/AddButton';



class CVCreator extends Component {
    constructor (props) {
        super(props);

        this.state = {
                    buttonActive: false,
                    errorMessage:'',
                    }
    }

    handleNameInput(text) {
        if(text.length > 35 ) {
            this.setState({errorMessage:"Your name is too long"});
        }
        else {
            let cv = this.props.cv;
            cv.name = text;
            this.props.onEnterName(cv);
            this.setState({errorMessage:""});
        }
    }

    handleEmailInput(text){
        if (text.length > 35) {
            this.setState({errorMessage:"Your Email is too long"});
        } else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if ( reg.test(text) === false && text !== "") {
                this.setState({errorMessage:"This doesn't seem to be a valid email"});
            } else {
                let cv = this.props.cv;
                cv.email = text;
                this.props.onEnterEmail(cv);
                this.setState({errorMessage:""});
            }
        }
    }

    handleAddressInput(text) {
        if(text.length > 35 ) {
            this.setState({errorMessage:"Your address is too long"});
        }
        else {
            let cv = this.props.cv;
            cv.address = text;
            this.props.onEnterAddress(cv);
            this.setState({errorMessage:""});
        }
    }

    handleAboutInput(text) {
        if(text.length > 450 ) {
            this.setState({errorMessage:"That's enough about yourself"});
        }
        if(this.props.cv.about !=='' && text.length < 6) {
            this.setState({errorMessage:"You should write a little bit more about yourself"});
        }
        else {
            let cv = this.props.cv;
            cv.about = text;
            this.props.onEnterAbout(cv);
            this.setState({errorMessage:""});
        }
    }

    onAddJob() {
        let newJob = {
            "orderNumber":this.props.jobs.length,
            "startYear":"",
            "stopYear":"",
            "jobTitle":"",
            "jobDescription":"",
        }
        this.props.onAddJob(newJob);
    }

    onAddSkill() {
        let newSkill = {
            "orderNumber":this.props.skills.length,
            "skillTitle":"",
        }
        this.props.onAddSkill(newSkill);
    }

    onAddEducation() {
        let newEducation = {
            "orderNumber":this.props.education.length,
            "startYear":"",
            "stopYear":"",
            "educationTitle":"",
        }
        this.props.onAddEducation(newEducation);
    }

    onDeleteJob(orderNumber) {
        let deleteJob = this.props.jobs;
        deleteJob = deleteJob.filter((job) => {
            return job.orderNumber !== orderNumber
        });
        for(let i=orderNumber; i < deleteJob.length; i++ ) {
            deleteJob[i].orderNumber = deleteJob[i].orderNumber - 1;
        }
        this.props.onDeleteJob(deleteJob);
    }

    onDeleteSkill(orderNumber) {
        let deleteSkill = this.props.skills;
        deleteSkill = deleteSkill.filter((skill) => {
            return skill.orderNumber !== orderNumber
        });
        for(let i=orderNumber; i < deleteSkill.length; i++ ) {
            deleteSkill[i].orderNumber = deleteSkill[i].orderNumber - 1;
        }
        this.props.onDeleteSkill(deleteSkill);
    }

    onDeleteEducation(orderNumber) {
        let deleteEducation = this.props.education;
        deleteEducation = deleteEducation.filter((education) => {
            return education.orderNumber !== orderNumber
        });
        for(let i=orderNumber; i < deleteEducation.length; i++ ) {
            deleteEducation[i].orderNumber = deleteEducation[i].orderNumber - 1;
        }
        this.props.onDeleteEducation(deleteEducation);
    }

    handleYearInput(text, name, orderNumber) {
        if (text.length > 4) {
            this.setState({errorMessage:"Too many years"});
        } else {
            let reg = /^[0-9 ]+$/
            if ( reg.test(text) === false && text !== "") {
                this.setState({errorMessage:"Numbers Only"});
            } else {
                let jobs = [...this.props.jobs];
                let job = {...jobs[orderNumber]};
                if(name==='startYear') {
                    job.startYear = text;
                    jobs[orderNumber] = job;
                    this.props.onEnterStartYear(jobs);
                }
                if(name==='stopYear') {
                    job.stopYear = text
                    jobs[orderNumber] = job;
                    this.props.onEnterStopYear(jobs);
                }
                this.setState({errorMessage:""});
            }
        }
    }

    handleJobTitleInput(text, orderNumber) {
        if(text.length > 35 ) {
            this.setState({errorMessage:"The job title is too long"});
        }
        else {
            let jobs = [...this.props.jobs];
            let job = {...jobs[orderNumber]};
            job.jobTitle = text;
            jobs[orderNumber] = job;
            this.props.onEnterJobTitle(jobs);
            this.setState({errorMessage:""});
        }
    }

    handleJobDescriptionInput(text, orderNumber) {
        if(text.length > 240 ) {
            this.setState({errorMessage:"The job description is too long"});
        }
        else {
            let jobs = [...this.props.jobs];
            let job = {...jobs[orderNumber]};
            job.jobDescription = text;
            jobs[orderNumber] = job;
            this.props.onEnterJobDescription(jobs);
            this.setState({errorMessage:""});
        }
    }

    handleSkillTitleInput(text) {
        if(text.length > 35 ) {
            this.setState({errorMessage:"Your skill title is too long"});
        }
        else {
            let skill = this.props.skills;
            skill.skillTitle = text;
            this.props.onEnterSkillTitle(skill);
            this.setState({errorMessage:""});
        }
    }

    handleEducationYearInput(text, name, orderNumber) {
        if (text.length > 4) {
            this.setState({errorMessage:"Too many years"});
        } else {
            let reg = /^[0-9 ]+$/
            if ( reg.test(text) === false && text !== "") {
                this.setState({errorMessage:"Numbers Only"});
            } else {
                let educations = [...this.props.education];
                let education = {...educations[orderNumber]};
                if(name==='startYear') {
                    education.startYear = text;
                    educations[orderNumber] = education;
                    this.props.onEnterEducationStartYear(educations);
                }
                if(name==='stopYear') {
                    education.stopYear = text
                    educations[orderNumber] = education;
                    this.props.onEnterEducationStopYear(educations);
                }
                this.setState({errorMessage:""});
            }
        }
    }

    handleEducationTitleInput(text) {
        if(text.length > 35 ) {
            this.setState({errorMessage:"Your name is too long"});
        }
        else {
            let education = this.props.education;
            education.name = text;
            this.props.onEnterEducationTitle(education);
            this.setState({errorMessage:""});
        }
    }

    render() {


        let addJobButton;

        if (this.props.cv.name !== '') {

            addJobButton = <AddButton onClick={() => this.onAddJob()} title={'job'}/>
        }

        let addSkillButton;

        if (this.props.cv.name !== '') {

            addSkillButton = <AddButton onClick={() => this.onAddSkill()} title={'Skill'}/>
        }

        let addEducationButton;

        if (this.props.cv.name !== '') {

            addEducationButton = <AddButton onClick={() => this.onAddEducation()} title={'Education'}/>
        }

        let job;

        if (this.props.jobs.length !== 0) {
            job = this.props.jobs.map(job => {
                return <Job key={job.orderNumber}
                            startYear={job.startYear}
                            stopYear={job.stopYear}
                            jobTitle={job.jobTitle}
                            jobDescription={job.jobDescription}
                            orderNumber={job.orderNumber}
                            errorMessage={this.state.errorMessage}
                            onDeleteJob={this.onDeleteJob.bind(this)}
                            handleYearInput={this.handleYearInput.bind(this)}
                            handleJobTitleInput={this.handleJobTitleInput.bind(this)}
                            handleJobDescriptionInput={this.handleJobDescriptionInput.bind(this)}
                />;
            });
        }

        let skill;

        if (this.props.skills.length !== 0) {
            skill = this.props.skills.map(skill => {
                return <Skill key={skill.orderNumber}
                            orderNumber={skill.orderNumber}
                            skillTitle={skill.skillTitle}
                            errorMessage={this.state.errorMessage}
                            onDeleteSkill={this.onDeleteSkill.bind(this)}
                            handleSkillTitleInput={this.handleSkillTitleInput.bind(this)}
                />;
            });
        }

        let education;

        if (this.props.education.length !== 0) {
            education = this.props.education.map(education => {
                return <Education key={education.orderNumber}
                            startYear={education.startYear}
                            stopYear={education.stopYear}
                            educationTitle={education.educationTitle}
                            orderNumber={education.orderNumber}
                            errorMessage={this.state.errorMessage}
                            onDeleteEducation={this.onDeleteEducation.bind(this)}
                            handleEducationYearInput={this.handleEducationYearInput.bind(this)}
                            handleEducationTitleInput={this.handleEducationTitleInput.bind(this)}
                />;
            });
        }

        return (
            <div className="cvCreatorContainer">
                    <About handleNameInput={this.handleNameInput.bind(this)}
                           handleEmailInput={this.handleEmailInput.bind(this)}
                           handleAddressInput={this.handleAddressInput.bind(this)}
                           handleAboutInput={this.handleAboutInput.bind(this)}
                           errorMessage={this.state.errorMessage}/>
                    {job}
                    {addJobButton}
                    {skill}
                    {addSkillButton}
                    {education}
                    {addEducationButton}
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cv: state.cv.cv,
        jobs: state.cv.jobs,
        skills: state.cv.skills,
        education: state.cv.education
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEnterName: (name) => dispatch(addName(name)),
        onEnterEmail: (email) => dispatch(addEmail(email)),
        onEnterAddress: (address) => dispatch(addAddress(address)),
        onEnterAbout: (about) => dispatch(addAbout(about)),
        onAddJob: (newJob) => dispatch(addJob(newJob)),
        onDeleteJob: (deletedJob) => dispatch(deleteJob(deletedJob)),
        onEnterStartYear: (year) => dispatch(addStartYear(year)),
        onEnterStopYear: (year) => dispatch(addStopYear(year)),
        onEnterJobTitle: (title) => dispatch(addJobTitle(title)),
        onEnterJobDescription: (description) => dispatch(addJobDescription(description)),
        onAddSkill: (newSkill) => dispatch(addSkill(newSkill)),
        onDeleteSkill: (deletedSkill) => dispatch(deleteSkill(deletedSkill)),
        onEnterSkillTitle: (skill) => dispatch(addSkillTitle(skill)),
        onAddEducation: (newEducation) => dispatch(addEducation(newEducation)),
        onDeleteEducation: (deletedEducation) => dispatch(deleteEducation(deletedEducation)),
        onEnterEducationStartYear: (year) => dispatch(addEducationStartYear(year)),
        onEnterEducationStopYear: (year) => dispatch(addEducationStopYear(year)),
        onEnterEducationTitle: (education) => dispatch(addEducationTitle(education)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CVCreator);