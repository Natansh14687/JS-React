import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebaseConfig'
import { Outlet } from 'react-router'
import Header from './Header'




const Body = () => {
  const dispatch = useDispatch();

  const bodyRouter = createBrowserRouter([
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/browse",
        element : <Browse />
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid, email:email, displayName:displayName, photoURL:photoURL}));
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
      }
    });
  },[])

  return (
    <div>
        {/* <Header /> */}
        <RouterProvider router={bodyRouter} />
    </div>
  )
}

export default Body