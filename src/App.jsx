import React from 'react'
import Layout from './Component/Layout/Layout'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Portfolio from './Component/Portfolio/Portfolio'
import Home from './Component/Home/Home'
import NotFound from './Component/NotFound/NotFound'






let routers = createHashRouter([
    {path : '' , element : <Layout/> , children :[
        {index: true , element: <Home/>},
        {path: 'about', element: <About/>},
        {path: 'contact', element: <Contact/>},
        {path: 'portfolio', element: <Portfolio/>},
        {path: '*', element: <NotFound/>}
    ]}
])


export default function App() {
    return <>
    <RouterProvider router={routers}></RouterProvider>
    </>
}