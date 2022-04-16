import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/class' element={<Class></Class>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
