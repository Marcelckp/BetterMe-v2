import style from './Footer.module.scss';
import { Link } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiFoodApple } from '@mdi/js';

function Footer() {
    
    return (
        <div className={style.Footer}>
            <div className={style.logo}> 
                <Icon 
                    className={style.svg}
                    path={mdiFoodApple}
                    size={2.2}
                    color='white'
                    />
                    <h2>Better Me</h2>
            </div>

            <div className={style.container}>

                <div className={style.col1}>
                    <p className={style.head}>Community</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Join Us</p>
                    <p>Follow us</p>
                </div>

                <div className={style.col2}>
                    <p className={style.head}>Get Started</p>
                    <Link className={style.link} to='/' >Home</Link>
                    <Link className={style.link} to='/search' >Search</Link>
                    <Link className={style.link} to='/mealplan' >Meal Plan</Link>
                    <Link className={style.link} to='/summary' >Summary</Link>
                    <Link className={style.link} to='/nutrition' >Nutrition</Link>
                </div>

            </div>
        </div>
    )
}

export default Footer;
