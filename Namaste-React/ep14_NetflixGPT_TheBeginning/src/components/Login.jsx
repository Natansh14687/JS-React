import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_LOGIN_PAGE_BG_IMG } from "../utils/images";
import validateLoginInfo from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [validateResult, setValidateResult] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInUp = () => {
    setSignIn(!signIn);
  };

  const validateUserInfo = () => {
    const result = validateLoginInfo(
      email.current.value,
      password.current.value
    );
    setValidateResult(result);

    if (result) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/154764555?v=4",

            
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid, email:email, displayName:displayName, photoURL:photoURL}));
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateResult(errorCode, " - ", errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateResult(errorCode, " - ", errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      <img
        src={NETFLIX_LOGIN_PAGE_BG_IMG}
        alt="Netflix-Bg_Image"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/80 text-white w-3/12 p-10 rounded-md"
        >
          <h1 className="text-3xl font-bold mb-8">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
          {!signIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full mb-6 p-3 rounded bg-gray-800 text-white placeholder-gray-400"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or mobile number"
            className="w-full mb-6 p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          {validateResult != null && (
            <p className="p-1 mb-4 text-red-600">{validateResult}</p>
          )}
          <button
            className="w-full bg-red-600 p-3 rounded text-white font-bold cursor-pointer hover:bg-red-700"
            onClick={validateUserInfo}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-700 py-5 text-lg">
            {signIn ? "New to Netflix?" : "Already have Account?"}
            <span
              className="hover:underline cursor-pointer text-white"
              onClick={toggleSignInUp}
            >
              {signIn ? "Sign up now." : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
