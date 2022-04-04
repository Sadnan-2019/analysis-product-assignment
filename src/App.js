// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './componenets/Error/Error';
import Header from './componenets/Header/Header';
import Home from './componenets/Home/Home';

function App() {
  return (
    <div className="">
      <Header></Header> 
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>



    </div>
  );
}

export default App;
