import React from 'react';
import style from './UserDetailsPage.module.scss';

import image from '../../images/rezel.jpg';

import { useNavigate } from 'react-router-dom';

function UserDetailsPage() {

    const navigate = useNavigate();

    return (
        <div style={{backgroundSize: 'cover', backgroundImage: `url(${image})`}} className={style.main}>
            <div className={style.overlay}>
                <div className={style.container}>
                    <div className={style.content}>
                        <h1>Further User Details</h1>
                        <br /><br />
                        <label htmlFor="age">Age</label>
                        <br />
                        <input type="text" id='age' placeholder='Enter Your Age...'/>

                        <br />
                        <br />
                        
                        <label htmlFor="height">Height</label>
                        <br />
                        <input type="text" id='height' placeholder='Enter Your Age...' />

                        <br />
                        <br />
                        
                        <label htmlFor="weight">Weight</label>
                        <br />
                        <input type="text" id='weight' placeholder='Enter Your Height...' />

                        <br />
                        <br />

                        <label htmlFor="diet">Diet</label>
                        <br />
                        <input type="text" id='diet' placeholder='Enter Your Diet...' />

                        <br />
                        <br />

                        <label htmlFor="allergies">Allergies</label>
                        <br />
                        <input type="text" id='allergies' placeholder='Enter Your Allergies...' />

                        <br />
                        <br />

                        <h1>Preferences</h1>
                        <br /><br />
                        <label htmlFor="age">Favourite Food</label>
                        <br />
                        <input type="text" id='age' placeholder='Enter Your Favourite Food...'/>

                        <br />
                        <br />
                        
                        <label htmlFor="height">Hated Food</label>
                        <br />
                        <input type="text" id='height' placeholder='Enter Your Most Hated Food...' />
                        
                        <br /><br /><br />

                        <div className={style.btnDiv}>
                            <button onClick={() => window.location.replace('/')} className={style.btnSkip}>Skip</button>
                            <button className={style.btn}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsPage
