import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './home';

function App() {
  const [login, setLogin] = useState(null);

  return (
    <div className="App">
      {
        (login) ? (
          <Router>
            <Switch>
  
                <Route path='/home'>
                  <Home />
                </Route>

                <Route path='/'>
                  <></>
                </Route>
      
            </Switch>
          </Router>
        ) : (
          <div><a href='#'>Login</a></div>
        )
      }
    </div>
  );
}

export default App;
