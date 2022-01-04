import { useRef } from 'react';
import style from './LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Nav from '../../Components/Navigation/Navigation';

import avo from '../../images/avo.jpg';

function LoginPage() {

    const navigate = useNavigate();

    const Log = useRef(null);
    const Password = useRef(null);

    const logn = async () => {
        axios.post(`http://localhost:4000/users/login`, {
            username: Log.current.value,
            password:  Password.current.value,
        },{ withCredentials: true })
            .then((res) => {
                // navigate('/');
                window.location.replace('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

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
                        <input ref={Log} id="name" type="text" placeholder='Enter Your Name...' />
                        <br />
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input ref={Password} id='password' type="text" placeholder='Enter Your Password...' />
                        <br /><br /><br />
                        <button onClick={logn} className={style.btn}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
