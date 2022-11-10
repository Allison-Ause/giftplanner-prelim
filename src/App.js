import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/AuthPage.js';
import Gifts from './components/Gifts';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/gifts" component={Gifts} />
        <Route path="*">
          <Redirect to="/auth/sign-up" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
