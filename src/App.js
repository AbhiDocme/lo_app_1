import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Component2/Side_Navigation/HomePage';
import Loginpage from './Components/Login/Loginpage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
