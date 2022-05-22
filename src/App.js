import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import NotFound from './Pages/NotFound';
import Blog from './Pages/Blog';
import Signup from './Components/Auth/Signup';
import About from './Pages/About';
import RequireAuth from './Components/Auth/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import MyReview from './Components/Dashboard/MyReview';
import History from './Components/Dashboard/History';
import MyProduct from './Components/Dashboard/MyProduct';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />


          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>

            <Route path="/dashboard" element={<MyProduct />} />
            <Route path="review" element={<MyReview />} />
            <Route path="history" element={<History />} />

          </Route>


          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <Toaster />
    </>
  );
}

export default App;
