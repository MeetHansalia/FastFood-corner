import classes from './Header.module.css';

import {Fragment} from 'react';
import Meal5 from '../../Assets/Meal5.jpg'
import HeaderCartButton from '../Header/HeaderCartButton.js';



const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>FastFood Corner</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={Meal5} alt='A table full of Delicious food'/>
            </div>
        </Fragment>
    )
}


export default Header;