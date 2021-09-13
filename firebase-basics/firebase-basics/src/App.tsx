import './App.css';
import React, { useEffect } from 'react';
import { useInput } from './useInput';
import { BrowserRouter as Router, Switch, Route , Link, useHistory} from 'react-router-dom'
import { Home } from './Home';
import firebase  from './firebase';



export const App = () => {

  const email = useInput("");
  const password = useInput("");
  let History = history;

  const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try{
      if(firebase){
        const user = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
        console.log('User: ', user);
      }
    }catch(err){
      console.error(err);
    }
  }

  return (
    <Router>

      <Switch>
        <Route path="/signUp">
          <div className="App">
            <h2>Inicia sesion</h2>
            <form onSubmit={signUp}>
              <input className="spacing" placeholder="Email" {...email} />
              <input className="spacing" placeholder="Password" type="password" {...password} />
              <button type="submit">Sign up</button>
            </form>
          </div>

        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}
