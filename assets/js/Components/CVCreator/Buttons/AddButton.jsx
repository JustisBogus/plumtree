import React from 'react';
import './AddButton.scss'

const AddButton = (props) => {
    return (
        <div className="addButtonWrap">
        <div className="addButton" onClick={props.onClick}> Add {props.title} </div>
        </div>
    )}
export default AddButton;