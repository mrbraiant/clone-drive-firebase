/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Home from './home';
import './App.css';
import { auth, provider } from './firebase';

function App() {
  const [login, setLogin] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).then((result) => {
      if (result) {
        setLogin({ email: result.user.email });
      }
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((value) => {
      console.log('value', value);
      setLogin({
        name: value.displayName,
        email: value.email,
        image: value.photoURL,
        uid: value.uid,
      });
      alert('Welcome back ' + value.displayName);
    });
  }, []);

  return (
    <div className="App">
      {login ? (
        <Router>
          <Switch>
            <Route path="/home">
              <Home login={login} setLogin={setLogin} />
            </Route>

            <Route path="/">
              <Home login={login} setLogin={setLogin} />
            </Route>
          </Switch>
        </Router>
      ) : (
        <div>
          <a onClick={(e) => handleLogin(e)} href="#">
            Login
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
