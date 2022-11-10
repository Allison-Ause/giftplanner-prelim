import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth}/>
        <Route path="*">
            <Redirect to="/auth/sign-up"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
