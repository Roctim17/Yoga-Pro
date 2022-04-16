import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Class from './Component/Class/Class';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import SignIn from './Component/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route to='/' element={<Home></Home>}></Route>
          <Route to='/about' element={<About></About>}></Route>
          <Route to='/blog' element={<Blog></Blog>}></Route>
          <Route to='/class' element={<Class></Class>}></Route>
          <Route to='/signin' element={<SignIn></SignIn>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
