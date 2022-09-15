import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Home/AddItem';
import Home from './Home/Home';
import Pant from './Home/Pant';
import ShirtItem from './Home/ShirtItem';
import Shoes from './Home/Shoes';
import Tshirt from './Home/Tshirt';
import Login from './Login/Login';
import Resetpassword from './Login/Resetpassword';
import Signup from './Login/Signup';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/additem" element={<AddItem></AddItem>}></Route>
          <Route path="/shirt" element={<ShirtItem></ShirtItem>}></Route>
          <Route path="/tshirt" element={<Tshirt></Tshirt>}></Route>
          <Route path="/pant" element={<Pant></Pant>}></Route>
          <Route path="/shoes" element={<Shoes></Shoes>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/reset" element={<Resetpassword></Resetpassword>}></Route>
          </Routes>      
    </div>
  );
}

export default App;
