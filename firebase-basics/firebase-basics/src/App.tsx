import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Home';
import { LogIn } from './componentes/Login/LogIn';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signUp"> 
        <LogIn/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}