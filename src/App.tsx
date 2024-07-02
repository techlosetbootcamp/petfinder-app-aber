
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage/LandingPage'
import PetDetail from './pages/petDetail/PetDetail'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import MainFooter from './components/mainFooter/MainFooter'
import MobileFooter from './components/mobileFooter/MobileFooter'
import SubFooter from './components/subFooter/SubFooter'
import Category from './pages/category/Category'
import FindAnimals from './pages/findAnimals/FindAnimals'




const router = createBrowserRouter([
  {
    path:'/',
    element : <Home/>,
    children : [
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/categories',
        element:<Category/>

      },
      {
        path:'/pets/find',
        element:<FindAnimals/>

      },
      {
        path:'/petDetail/:petId',
        element:<PetDetail/> ,
      },

    ]
  }
])

function App() {



  return (
    <>
   
    <RouterProvider router={router}>
      
    </RouterProvider>
    <Footer/>
      <MainFooter/>
      <MobileFooter/>
      <SubFooter/>
    </>
  )
}

export default App
