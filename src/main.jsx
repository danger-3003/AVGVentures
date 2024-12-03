import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Hillcrest from "./Pages/Projects/Hillcrest.jsx"
import Lakeview from "./Pages/Projects/Lakeview.jsx"
import Shridharani from "./Pages/Projects/Shridharani.jsx"
import NavBar from "./Components/NavBar.jsx"
import Footer from "./Components/Footer.jsx"


const Structure=()=>{
  return(
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Structure />,
    children:[
      {
        path:"/",
        element:<App />
      },
      {
        path:"/hillcrest",
        element:<Hillcrest />
      },
      {
        path:"/lakeview",
        element:<Lakeview />
      },
      {
        path:"/shridharani",
        element:<Shridharani />
      }      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
