import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import smartwatch_banner from './Components/Assets/smart_watches_banner.webp';
import airpod_banner from './Components/Assets/airpods_banner.webp';
import headphone_banner from './Components/Assets/headphones_banner.jpg';
import other_banner from './Components/Assets/other_banner.webp';
import LoginProfile from './Components/Profile/LoginProfile';
import Register from './Components/Register/Register';
import PostForm from './PostForm/PostForm';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path="/smart watch's" element={<ShopCategory banner={smartwatch_banner} category="smart watch's"/>}/>
        <Route path="/airpods" element={<ShopCategory banner={airpod_banner} category="airpods"/>}/>
        <Route path="/headphones" element={<ShopCategory banner={headphone_banner} category="headphones"/>}/>
        <Route path="/others" element={<ShopCategory banner={other_banner} category="other"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/profile' element={<LoginProfile />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<PostForm/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
