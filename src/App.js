import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Mainbox from './Component/Mainbox';
import SingleProduct from './Component/Cart/SingleProduct';
import Menu from './Component/Menu';
import Shoppingcart from './Component/ShopingCart/Shoppingcart';
import Home from './Component/Home';
import About from './Component/About';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import WatchVideo from './SubComponents/WatchVideo';
import Login from './SubComponents/Login';
import Register from './SubComponents/Register';
import ShippingForm from './SubComponents/ShippingForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/main' element={<Mainbox />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/watchvideo' element={<WatchVideo />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/testimonials' element={<Testimonial />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Shoppingcart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/shippingform' element={<ShippingForm />} />
    </Routes>
  );
}

export default App;
