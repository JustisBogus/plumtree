import React from 'react';

const About = props => {

    return (
        <React.Fragment>
            <div className="cvCreatorTitle" > Create Your CV </div>
            <div>
                <input placeholder="Enter Your Name" onChange={(event) => props.handleNameInput(event.target.value)} name="name"
                       value={props.name}
                       className="nameInput" id="name" />
            </div>
            <div>
                <input placeholder="Enter Your Email" onChange={(event) => props.handleEmailInput(event.target.value)} name="email"
                       value={props.address}
                       className="emailInput" id="email" />
            </div>
            <div>
                <input placeholder="Enter Your Address" onChange={(event) => props.handleAddressInput(event.target.value)} name="address"
                       value={props.address}
                       className="addressInput" id="address" />
            </div>
            <div>
                    <textarea placeholder="Write a few words about yourself" onChange={(event) => props.handleAboutInput(event.target.value)} name="about"
                              value={props.address}
                              className="aboutInput" id="about" />
            </div>
            <div>{props.errorMessage}</div>
            </React.Fragment>
    );
}

export default About;