import { Route, Routes } from 'react-router-dom';
import './App.css';
import Errors from './Components/Errors';
import Home from './Components/Home';
import Login from './Components/Login';
import NavbarU from './Components/NavbarU';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <NavbarU/>
      <Errors/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
