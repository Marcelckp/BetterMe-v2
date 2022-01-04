import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './ProfilePage.module.scss';

import Nav from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

import placeholder from '../../images/placeHolder.png';

// Components
import Account from './Components/AccountComponent/Account';
import General from './Components/GeneralComponent/General';

function ProfilePage() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    const [active, setActive] = useState('General');

    useEffect(()=> {
        if (!user) navigate('/signup');
    });

    console.log(user);

    return (
        <>
            <Nav />

                <div className={style.main}>
                    <div className={style.sideBar}>
                        <h1>Account Page</h1>
                        <img className={style.image} src={placeholder} alt="" />

                        <h2>{ user ? user.fullname : ''}</h2>
                        <div className={style.actions}>

                            <div className={`${active === 'General' ? style.active : ''}`} onClick={() => setActive('General')}>
                                <p>General</p>
                            </div>

                            <div className={`${active === 'Settings' ? style.active : ''}`} onClick={() => setActive('Settings')}>
                                <p>Settings</p>
                            </div>

                            <div className={`${active === 'Account' ? style.active : ''}`} onClick={() => setActive('Account')}>
                                <p>Account</p>
                            </div>

                            <div className={`${active === 'Help' ? style.active : ''}`} onClick={() => setActive('Help')}>
                                <p>Help</p>
                            </div>

                            <div className={`${active === 'Privacy' ? style.active : ''}`} onClick={() => setActive('Privacy')}>
                                <p>Privacy & Safety</p>
                            </div>

                        </div>
                    </div>
                    <div className={style.container}>
                        { active === 'General' ? 
                            <General />
                        : active === 'Settings' ? 
                            <h1>Setting Components</h1>
                        : active === 'Account' ? 
                            <Account />
                        : active === 'Help' ? 
                            <h1>Help Component</h1>
                        : active === 'Privacy' ? 
                            <h1>Privacy & Safety</h1>
                        : ''}
                    </div>
                </div>

            <Footer />
        </>
    )
}

export default ProfilePage;
