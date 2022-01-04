import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Register from './Components/Register';
import Login from './Components/Login';
import {auth} from './firbase';
import React, {useState, useEffect} from 'react';
// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signInWithPopup } from "firebase/auth";


function App() {

  // check if user is logged in
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [])



  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar user={user} />
        <Switch>
        <Route path="/" component={Home} exact  />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />

        </Switch>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
