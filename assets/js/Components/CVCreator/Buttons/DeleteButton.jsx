import React from 'react';
import './DeleteButton.scss'

const DeleteButton = (props) => {
    return (
        <div className="deleteButtonWrap">
            <div className="deleteButton" onClick={props.onClick}> Delete {props.title} </div>
        </div>
    )}
export default DeleteButton;