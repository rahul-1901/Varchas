import { useState } from 'react'
import './App.css'
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Events from './varchas/Events';
import Navbar from './varchas/Navbar';
import Footer from './varchas/Footer';
import Varchas from './varchas/Varchas';
import Sponsors from './varchas/Sponsors';
import Evarchas from './varchas/Evarchas';
import Login from './login/Login';
import { Route } from 'react-router-dom';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     // <Route path='/' element={<Layout/>}>

//     </Route>
//   )
// )
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Varchas /><Footer /></>
    },
    {
      path: "/events",
      element: <><Navbar /><Events /></>
    },
    {
      path: "/sponsor",
      element: <><Navbar /><Sponsors /></>
    },
    {
      path: "/evarchas",
      element: <><Navbar /><Evarchas /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
