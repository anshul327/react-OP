import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home, Contact, About} from './components/combined.js'
import User from './components/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github.jsx'

// OLDER WAY
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact-us",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// NEW WAY
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      //children are considered as Outlets of Layout
      <Route path='' element= {<Home/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='contact-us' element= {<Contact/>}/>
      <Route path='user/:userId' element= {<User/>}/>
      <Route 
      path='github' 
      element= {<Github/>}
      loader={gitHubInfoLoader} //stores at first load then keeps in cache
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
