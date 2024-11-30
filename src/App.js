import './App.css';
import RegistrationContainer from './components/RegistrationContainer'
import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/signup',
    element: <RegistrationContainer tab={1} />,
  },
  {
    path: '/login',
    element: <RegistrationContainer tab={0} />,
  },
]);

function App() {
  return <>
    <NavBar />
    <RouterProvider router={router} />
  </>
}

export default App;
