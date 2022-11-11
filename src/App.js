import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './components/AuthPage.js';
import Gifts from './components/Gifts';
import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Switch>
        <Route path="/auth/:type" component={AuthPage} />
        <Route path="/gifts" component={Gifts} />
        <Route path="*">
          <Redirect to="/auth/sign-up" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
