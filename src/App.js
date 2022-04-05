// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './componenets/Blog/Blog';
import Dashboard from './componenets/Dashboard/Dashboard';
import Error from './componenets/Error/Error';
import Footer from './componenets/Footer/Footer';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';
import Review from './componenets/Review/Review';
// import Reviews from './componenets/Reviews/Reviews';

function App() {
  return (
    <div className="">
      <Header></Header> 
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>



    </div>
  );
}

export default App;
