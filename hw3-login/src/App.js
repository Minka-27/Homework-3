import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import BadLogin from './badLogin';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home  />} />
          <Route path="/bad-login" element={<BadLogin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
