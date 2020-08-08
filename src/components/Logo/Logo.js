import React from 'react';
import logoBurger from '../../assets/images/burger-logo.png';
import classes from './Logo.css'


const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoBurger} alt="burger" />
    </div>
);

export default logo;