import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation(){
    return <header className={classes.header}>
        <div className={classes.logo}> LCCC LOGO </div>
        <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about-us'>About Us</Link>
            </li>
            <li>
                <Link to='/leo-club'>Leo Club</Link>
            </li>
            <li>
                <Link to='/lcif'>LCIF</Link>
            </li>
            <li>
                <Link to='/members'>Members</Link>
            </li>
            <li>
                <Link to='/events'>Events</Link>
            </li>
            <li>
                <Link to='/conference'>Conference</Link>
            </li>
        </ul>
        </nav>
    </header>
}

export default MainNavigation;