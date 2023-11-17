import { Component } from 'react'
import classes from './Notification.module.css'

const Notification = ({message}) => {

    return (
        <p className={classes.notificationMessage}>{message}</p>
    )
}

export default Notification;