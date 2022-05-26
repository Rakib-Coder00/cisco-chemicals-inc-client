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
import History from './Components/Dashboard/History';
import MyProduct from './Components/Dashboard/MyProduct';
import Checkout from './Pages/Checkout';
import Products from './Components/Home/Products';
import MyOrder from './Components/Dashboard/MyOrder';
import Users from './Components/Dashboard/Users';
import AddProduct from './Components/Dashboard/AddProduct';
import RequireAdmin from './Components/Auth/RequireAdmin';
import MyProfile from './Components/Dashboard/MyProfile';
import AddReview from './Components/Dashboard/AddReview';
import ManageAllProduct from './Components/Dashboard/ManageAllProduct';
import Payment from './Components/Dashboard/Payment';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import MyPortfolio from './Pages/MyPortfolio';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<MyPortfolio />} />


          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>

            <Route path="/dashboard" element={<MyProduct />} />
            <Route path="review" element={<AddReview />} />
            <Route path="history" element={<History />} />
            <Route path="orders" element={<MyOrder />} />
            <Route path="myProfile" element={<MyProfile/>} />
            <Route path="payment/:id" element={<Payment/>} />
            <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>} />
            <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
            <Route path="manageProduct" element={<RequireAdmin><ManageAllProduct /></RequireAdmin>} />

          </Route>

          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<RequireAuth><Checkout /></RequireAuth> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <Toaster />
    </div>
  );
}

export default App;
