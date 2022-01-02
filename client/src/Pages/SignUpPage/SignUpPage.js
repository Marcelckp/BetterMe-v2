import React from 'react';
import style from './SignUpPage.module.scss';

import Nav from '../../Components/Navigation/Navigation';

import yoga from '../../images/yoga.jpg';

function SignUpPage() {
    return (
        <>
            <Nav />
            <div style={{backgroundImage: `url(${yoga})`}} className={style.main}>
                <div className={style.container}>
                    <form className={style.content}>
                        <h1>Sign Up</h1>
                        <br />
                        <br />
                        <label htmlFor="nameS">Full Name</label>
                        <br />
                        <input id='nameS' type="text" placeholder='Enter Your Name...' />
                        <br />
                        <br />
                        <label htmlFor="username">Username</label>
                        <br />
                        <input id='username' type="text" placeholder='Enter Your Password...' />
                        <br />
                        <br />
                        <label htmlFor="email">Email</label>
                        <br />
                        <input id='email' type="text" placeholder='Enter Your Password...' />
                        <br />
                        <br />
                        <label htmlFor="passwordS">Password</label>
                        <br />
                        <input id='passwordS' type="text" placeholder='Enter Your Password...' />
                        <br /><br /><br />
                        <button type='button' className={style.btn}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpPage
