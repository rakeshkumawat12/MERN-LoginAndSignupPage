import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isLoggedIn && <Route path="/user" element={<Welcome />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
