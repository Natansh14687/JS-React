import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/images";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const toggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
          
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/login");
        // User is signed out
        // ...
      }
      return () => unsubscribe();
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute flex justify-between w-full bg-linear-to-b from-black/70 z-20">
      <img src={NETFLIX_LOGO} alt="Netflix-Logo-Image" className="h-32 px-6" />
      {user && (
        <div
          className="text-white font-bold text-xl flex items-center mb-5 mr-3 cursor-pointer"
        >
          <button className="mr-2 bg-purple-800 p-4 rounded-lg -mt-1 cursor-pointer" onClick={toggleGptSearch}>gpt search</button>
          <img
            alt="profileIMG"
            src={user.photoURL}
            className="h-16 rounded-full"
          />
          <p onClick={handleSignOut}>(Sign Out)</p>
        </div>
      )}
    </div>
  );
};

export default Header;
