import { useRef, useState } from 'react';
import style from './SignUpPage.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Nav from '../../Components/Navigation/Navigation';

import yoga from '../../images/yoga.jpg';

function SignUpPage() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const FullName = useRef(null);
    const Username = useRef(null);
    const Email = useRef(null);
    const Password = useRef(null);

    const submit = async () => {
        setLoading(true);
        await axios.post('http://localhost:4000/users/signup', {
                fullName: FullName.current.value,
                username: Username.current.value,
                email: Email.current.value,
                password: Password.current.value,
        }, { withCredentials: true })
            .then((res) => {
                console.log(res);
                // navigate('/userdetails');
                // setLoading(false);
                window.location.replace('/userdetails');
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            })
    }

    return (
        <>
            <Nav />
            <div style={{backgroundImage: `url(${yoga})`}} className={style.main}>
                { loading ? 
                        <div className={style.loader}></div>
                    :
                    <div className={style.container}>
                        <form className={style.content}> 
                                <h1>Sign Up</h1>
                                <br /><br />

                                <label htmlFor="nameS">Full Name</label>
                                <br />
                                <input ref={FullName} id='nameS' type="text" placeholder='Enter Your Name...' />

                                <br /><br />

                                <label htmlFor="username">Username</label>
                                <br />
                                <input ref={Username} id='username' type="text" placeholder='Enter Your Password...' />

                                <br /><br />

                                <label htmlFor="email">Email</label>
                                <br />
                                <input ref={Email} id='email' type="text" placeholder='Enter Your Password...' />

                                <br /><br /><br />
                                
                                <label  htmlFor="passwordS">Password</label>
                                <br />
                                <input ref={Password} id='passwordS' type="password" placeholder='Enter Your Password...' />

                                <br /><br /><br />
                                <button type='button' onClick={(e) => {
                                    e.preventDefault();
                                    submit()
                                    console.log('clicked')
                                }} className={style.btn}>Submit</button>
                        </form>
                    </div>
                }
            </div>
        </>
    )
}

export default SignUpPage
