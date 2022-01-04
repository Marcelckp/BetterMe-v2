import { useRef } from "react";
import style from "./Account.module.scss";

function Account() {
  const FullName = useRef(null);
  const Email = useRef(null);
  const Username = useRef(null);
  const Password = useRef(null);

  return (
    <div className={style.main}>
      <h1>Welcome to Account settings</h1>
      <br />
      <p>Change your account information</p>
      <div className={style.container}>
        <form className={style.content}>
            <label htmlFor="">Full Name</label>
            <br />
            <input ref={FullName} type="text" placeholder="Enter your new Full Name" />
            <br /><br />

            <label htmlFor="">Username</label>
            <br />
            <input ref={Username} type="text" placeholder="Enter your new Username" />
            <br /><br />

            <label htmlFor="">Email</label>
            <br />
            <input ref={Email} type="text" placeholder="Enter your new Email..." />
            <br /><br />

            <label htmlFor="">Password</label>
            <br />
            <input ref={Password} type="text" placeholder="Enter your new Password..." />

            <br /><br /><br />
            <button onClick={() => console.log('value')}>Submit Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Account;
