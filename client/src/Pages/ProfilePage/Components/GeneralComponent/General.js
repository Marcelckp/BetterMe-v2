import { useRef } from 'react';
import style from './General.module.scss';

function General() {

    const Diet = useRef(null);
    const Age = useRef(null);
    const Height = useRef(null);
    const Weight = useRef(null);
    const Allergies = useRef(null);
    const Hated = useRef(null);
    const Favourite = useRef(null);

    return (
        <div className={style.main}>
            <h1>Welcome to Account settings</h1>
            <br />
            <p>Change your account information</p>
            <br />
            <div className={style.container}>
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
