import React, { useState } from "react";
import { login } from "../../features/userSlice";
import { provider, auth } from "../../firebase";
import "./Login.css";
import { useDispatch } from "react-redux";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name.");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        // console.log(user);
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <h2>Sign In Form</h2>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name(required if registering)"
          type="text"
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="profile pic URL (optional)"
          type="text"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p className="login__newMember">
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>

      <div className="login__gmailLogin" onClick={signIn}>
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt="..."
        />
        <h3>Sign In with Google</h3>
      </div>
    </div>
  );
}

export default Login;
