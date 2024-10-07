import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Address from './Components/Address'
import PageNotFound from './Components/PageNotFound'


const router = createBrowserRouter(
  [
    {
      path: "/React-Router-Practice",
      element: <div>
          <Navbar />
          <Home />
      </div> 
    },
    {
      path: "/about",
      element: <div>
      <Navbar />
      <About />
  </div>,
  children:[
    {
      path:"address",
      element: <Address />
    }
  ]
    },
    {
      path: "/contact/:name",
      element: <div>
      <Navbar />
      <Contact />
  </div> 
    },

    {
      path: "*",
      element:<PageNotFound />
    }
  ]
)

function App() {
  

  return (
   <div>
      
      <RouterProvider router={router} />
      
   </div>
  )
}

export default App
