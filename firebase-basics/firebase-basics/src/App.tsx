import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Home';
import { SignUp } from './componentes/Signup/SignUp';
import { LogIn } from './componentes/Login/Login';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}