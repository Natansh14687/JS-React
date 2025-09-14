import React from "react";
import { NETFLIX_LOGO } from "../utils/images";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
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
    <div className="absolute flex justify-between w-full bg-linear-to-b from-black to-transparent z-20">
      <img src={NETFLIX_LOGO} alt="Netflix-Logo-Image" className="h-32 px-6" />
      {user && <div
        className="text-white font-bold text-xl flex items-center mb-5 mr-3 cursor-pointer"
        onClick={handleSignOut}
      >
        <img alt="profileIMG" src={user.photoURL} className="h-16 rounded-full" />
        (Sign Out)
      </div>}
    </div>
  );
};

export default Header;
