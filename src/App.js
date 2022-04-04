// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componenets/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Routes>

        <Route path='/home' element={}></Route>
      </Routes>



    </div>
  );
}

export default App;
