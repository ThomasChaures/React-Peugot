import { StrictMode } from 'react' // react
import { createRoot } from 'react-dom/client' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx' // App
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import './index.css'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
])

createRoot(document.getElementById('root')).render( // renderizamos en #root //
  // obliga a nuestro componente para se renderice mas de una sola vez strictMode
  <StrictMode> 
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
