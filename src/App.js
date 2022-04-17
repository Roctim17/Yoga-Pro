import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Class from './Component/Class/Class';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/class' element={<Class></Class>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
};

export default App;
