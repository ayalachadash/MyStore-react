import React from 'react';
import './App.css';
import { Home } from './components/Home.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import About from './components/About';
import ShowProductComponent from './components/ShowProduct.component';
// import ProductForm from './components/ProductForm.component';
import { Router as RouterLocation, ReactLocation } from "react-location";
import Products from './components/Products.component';
import ProductForm from './components/ProductForm.component';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { arrProductsContext, arrProductsContextProvider } from './context/ArrProducts.context';
import { DataProducts } from './data/DataProducts';
import { ThemeContext } from './context/ArrProducts.context';
import Login from './components/Login.component';
// import { arrProductsContext, arrProductsContextProvider } from './context/ArrProducts.context'

function App() {

  const routes = ['Home', 'Products', 'About', 'Login'];
  const them = "aaa"
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg bg-light container-fluid">
          <menu id='mainMenu'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routes.map(route => <li className="nav-link active nav-item" aria-current="page" key={route}><Link to={route}>{route}</Link></li>)}
            </ul>
          </menu>
        </nav>

        <Routes>
          <Route path="/Home" element={<Home value='lllllllllll' />} />
          {/* <ThemeContext.Provider value={them}></ThemeContext.Provider> */}
          <Route path="/Products" element={<Products />} >
            <Route path='ProductFormAdd/:mode' element={<ProductForm />} />
            <Route path='ShowProduct/:_id' element={<ShowProductComponent/>} />
            <Route path='ProductFormEdit/:_id/:mode' element={<ProductForm />} />
          </Route>
          <Route path="/Login" element={<Login/>} />
          <Route path="/About" element={<About params={"about"}/>} />
        </Routes>

      </Router>
    </div >
  );
}

export default App;
<Routes>
</Routes>
