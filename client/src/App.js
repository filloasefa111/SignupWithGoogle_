// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Headers from './components/Headers';
import Error from './Error';
import Dashbord from './components/Dashbord';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <Headers />
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/dashbord' element={< Dashbord />}/>
        <Route path='*' element={< Error />}/>
      </Routes>
     
    </>
  );
}

export default App;
