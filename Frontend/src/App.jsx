import Login from './Components/Login';
import SignUp from './Components/SingUp';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import logo from "./assets/logo.png"
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import NavBar from './Components/NavBar';
function App() {


  return (
    <div className=' h-[100vh]'>

      <BrowserRouter >
        <NavBar logo={logo} />
        <div className='flex justify-center items-center h-[85vh]'>
          <Routes >
            <Route path='/' element={<Intro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
