import { useRef, useState } from "react";
import style from "./Account.module.scss";
import { useSelector } from 'react-redux';
import axios from "axios";

function Account() {

  const [loading, setLoading] = useState(false);

  const user = useSelector(state => state.user.user);
  
  const FullName = useRef(null);
  const Email = useRef(null);
  const Username = useRef(null);
  const Password = useRef(null);

  const submit = async () => {
    setLoading(true)
    axios.put(`http://localhost:4000/users/${user.user_id}/updateProfile`, {
      fullName: FullName.current.value,
      email: Email.current.value,
      username: Username.current.value,
      password: Password.current.value,
    }, { withCredentials: true })
    .then((res) => {
      setLoading(false);
      console.log(res);
      alert('Successfully updated!');
      window.location.reload();
    })
    .catch((err) => {
      setLoading(false);
      alert('User Failed to update');
      console.log(err);
    });
  }

  return (
    <div className={style.main}>

      <h1>Welcome to Account settings</h1>
      <br />
      <p>Change your account information</p>

      <div className={style.container}>

        <div className={style.account}>
          <h1> Current Full name: { user.fullname }</h1>
          <h1> Current User name: { user.username }</h1>
          <h1> Current Email: {user.email}</h1>
          <h1> Current Password: {user.password.slice(0,4)}*****</h1>
        </div>

        { loading ? 
          <div className={style.loadingDiv}>
            <div className={style.loader}></div>
          </div>
        :

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
              <button onClick={submit}>Submit Changes</button>
          </form>

        }

      </div>
    </div>
  );
}

export default Account;
