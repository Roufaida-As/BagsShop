import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div >
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} />
       
      </Routes>
      
      
      
      </BrowserRouter>

   
    </div>
  );
}

export default App;
