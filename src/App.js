import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Navigation/Nav';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
