import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login'
import Browse from './Browse'









const Body = () => {
  

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

  

  return (
    <div>
        {/* <Header /> */}
        <RouterProvider router={bodyRouter} />
    </div>
  )
}

export default Body