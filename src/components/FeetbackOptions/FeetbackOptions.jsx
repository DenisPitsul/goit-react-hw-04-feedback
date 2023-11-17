import { Component } from "react";
import classes from './FeetbackOptions.module.css'

const FeetbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
        <div className={classes.feetbackOptionsBtns}>
            {
                options.map(option => 
                    <button 
                        key={option}
                        type="button" 
                        className={classes.feetbackOptionsBtn}
                        onClick={() => onLeaveFeedback(option)}
                    >{option}</button>
                )
            }
        </div>
    )
}

export default FeetbackOptions;