import React, { useEffect, useRef, useState } from 'react';
import style from './UserDetailsPage.module.scss';

import image from '../../images/rezel.jpg';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function UserDetailsPage() {

    const navigate = useNavigate();

    const user = useSelector(state => state.user.user);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) navigate('/signup');
    })
    
    const Age = useRef(null);
    const Height = useRef(null);
    const Weight = useRef(null);
    const Diet = useRef(null);
    const Allergies = useRef(null);
    const Favourite = useRef(null);
    const Hated = useRef(null);
    
    const createEntry = async () => {
        setLoading(true);
        axios.post(`http://localhost:4000/userDetails/${user.user_id}/create`, {
            user_id: user.user_id,
            height: Height.current.value,
            weight: Weight.current.value,
            age: Age.current.value,
            allergies: Allergies.current.value,
            diet_type: Diet.current.value,
            favoriteFood: Favourite.current.value,
            nonFavoriteFood: Hated.current.value,
        })
        .then(res => {
            console.log(res);
            window.location.replace('/');
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        })
    }

    return (
        <div style={{backgroundSize: 'cover', backgroundImage: `url(${image})`}} className={style.main}>
            <div className={style.overlay}>
            { loading ?
                <div className={style.loader}></div>
                :
                <div className={style.container}>
                    <div className={style.content}>
                        <h1>Further User Details</h1>
                        <br /><br />
                        <label htmlFor="age">Age</label>
                        <br />
                        <input ref={Age} type="text" id='age' placeholder='Enter Your Age...'/>

                        <br />
                        <br />
                        
                        <label htmlFor="height">Height</label>
                        <br />
                        <input ref={Height} type="text" id='height' placeholder='Enter Your Age...' />

                        <br />
                        <br />
                        
                        <label  htmlFor="weight">Weight</label>
                        <br />
                        <input ref={Weight} type="text" id='weight' placeholder='Enter Your Height...' />

                        <br />
                        <br />

                        <label htmlFor="diet">Diet</label>
                        <br />
                        <input ref={Diet} type="text" id='diet' placeholder='Enter Your Diet...' />

                        <br />
                        <br />

                        <label htmlFor="allergies">Allergies</label>
                        <br />
                        <input ref={Allergies} type="text" id='allergies' placeholder='Enter Your Allergies...' />

                        <br />
                        <br />

                        <h1>Preferences</h1>
                        <br /><br />
                        <label htmlFor="Favour">Favourite Food</label>
                        <br />
                        <input ref={Favourite} type="text" id='Favour' placeholder='Enter Your Favourite Food...'/>

                        <br />
                        <br />
                        
                        <label htmlFor="Hated">Hated Food</label>
                        <br />
                        <input ref={Hated} type="text" id='Hated' placeholder='Enter Your Most Hated Food...' />
                        
                        <br /><br /><br />

                        <div className={style.btnDiv}>
                            <button onClick={() => window.location.replace('/')} className={style.btnSkip}>Skip</button>
                            <button onClick={createEntry} className={style.btn}>Submit</button>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default UserDetailsPage
