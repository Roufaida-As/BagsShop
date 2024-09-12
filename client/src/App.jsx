import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} /> {/* Product Details */}
          <Route path="/login" element={<Login />} />  {/* Login Route */}
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
