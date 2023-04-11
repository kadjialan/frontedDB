import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddIngredients from './pages/Actions/AddIngredients/AddIngredients';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="ingredients" element={<AddIngredients />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
