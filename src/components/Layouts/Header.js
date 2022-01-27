import React from "react"
import bgimage from '../../Assets/bgimage.jpg'
import classes from './Header.module.css' 
import CartButton from './HeaderCartButton'
const Header = () => {
    return <React.Fragment>
        
        <header className={classes.header}>
        <div className={classes.logo}>FoodApp</div>
        <div className={classes["navbar-links"]}>
            <ul>
                <li><a href="#">Offers</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Login In</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>  
        <div className={classes["toggle-button"]}>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
        </div>    
        </header>
        <img className={classes['header-img']} src={bgimage} alt="Background"></img>       
    </React.Fragment>
}

export default Header;