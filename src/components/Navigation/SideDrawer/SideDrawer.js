import React from 'react';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const sideDrawer = (props) => {

        return(
            <Aux>
                <Backdrop show>
                    <div className={classes.SideDrawer}>
                        <Logo heigh="11px" ></Logo>
                        <nav>
                            <NavigationItems />
                        </nav>
                    </div>
                </Backdrop>
            </Aux>
        );
}

export default sideDrawer;