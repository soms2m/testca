import './style/App.css';
import react, {useState} from 'react';
import NestedGrid from './components/content/Grid';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginContext from './components/header/LoginContext';
import Login from './components/header/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);  
  const isLoginPopUp = useSelector(state => state.isLoginPopUp);  
  return (
      <div className="App">
        <Header  isLoggedin={isLoggedIn} />
        <NestedGrid isLoggedin={isLoggedIn} /> 
        {isLoginPopUp ?      
        <Login  />
        : ''
        }
        <Footer/>
      </div>      
  );
}

export default App;
