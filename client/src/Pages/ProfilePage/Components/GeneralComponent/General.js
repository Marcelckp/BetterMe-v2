import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './General.module.scss';

function General() {

    const user = useSelector(state => state.user.user);
    const [userDetails, setUserDetails] = useState(null);

    const Diet = useRef(null);
    const Age = useRef(null);
    const Height = useRef(null);
    const Weight = useRef(null);
    const Allergies = useRef(null);
    const Hated = useRef(null);
    const Favourite = useRef(null);

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:4000/userDetails/${user.user_id}`)
                .then((res) => {
                    setUserDetails(res.data.data)
                })
                .catch((err) => console.log(err))
        }
    }, [user])

    console.log(userDetails)

    return (
        <div className={style.main}>
            <h1>Welcome to Account settings</h1>
            <br />
            <p>Change your account information</p>
            <br />
            <div className={style.container}>

                { userDetails ? 
                    <div className={style.account}>
                        <h1> Current Age: { userDetails && userDetails.age}</h1>
                        <h1> Current Height: { userDetails && userDetails.height }</h1>
                        <h1> Current Weight: {userDetails && userDetails.weight}</h1>
                        <h1> Current Allergies: {userDetails && userDetails.allergies}</h1>
                        <h1> Current Diet: {userDetails && userDetails.diet_type}</h1>
                        <h1> Current Favourite Food: {userDetails && userDetails.favoritefood}</h1>
                        <h1> Current Hated Food: { userDetails && userDetails.nonfavoritefood}</h1>
                    </div>
                : 

                    <div className={style.account}>
                        <h1>You have no user details as yet, why not create some!</h1>
                    </div> 

                }

                <form className={style.content}>
                    <label htmlFor="">Age</label>
                    <br />
                    <input ref={Age} type="text" placeholder="Enter your new Age..." />
                    <br /><br />

                    <label htmlFor="">Height</label>
                    <br />
                    <input ref={Height} type="text" placeholder="Enter your new Height..." />
                    <br /><br />

                    <label htmlFor="">Weight</label>
                    <br />
                    <input ref={Weight} type="text" placeholder="Enter your new Weight..." />
                    <br /><br />

                    <label htmlFor="">Diet</label>
                    <br />
                    <input ref={Diet} type="text" placeholder="Enter your new Password..." />

                    <br /><br />

                    <label htmlFor="">Allergies</label>
                    <br />
                    <input ref={Allergies} type="text" placeholder="Enter your new Allergies..." />
                    <br /><br />

                    <label htmlFor="">Hated Food</label>
                    <br />
                    <input ref={Hated} type="text" placeholder="Enter your new Hated Food..." />
                    <br /><br />

                    <label htmlFor="">Favourite Food</label>
                    <br />
                    <input ref={Favourite} type="text" placeholder="Enter your new Favourite..." />

                    <br /><br /><br />
                    <button onClick={() => console.log('value')}>Submit Changes</button>
                </form>
            </div>
        </div>
    )
}

export default General;
