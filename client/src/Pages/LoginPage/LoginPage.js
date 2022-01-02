import React from 'react';
import style from './LoginPage.module.scss';

import Nav from '../../Components/Navigation/Navigation';

import avo from '../../images/avo.jpg';

function LoginPage() {
    return (
        <>
            <Nav />
            <div style={{backgroundImage: `url(${avo})`}} className={style.main}>
                <div className={style.container}>
                    <div className={style.content}>
                        <h1>Login</h1>
                        <br />
                        <br />
                        <label htmlFor="name">Username Or Email</label>
                        <br />
                        <input id="name" type="text" placeholder='Enter Your Name...' />
                        <br />
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input id='password' type="text" placeholder='Enter Your Password...' />
                        <br /><br /><br />
                        <button className={style.btn}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
