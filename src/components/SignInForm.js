import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import { signInUser } from '../utils/fetch-utils';
import Header from './Header.js';
import Snow from './Snow/Snow.js';

export default function SignInForm() {
  const { theme } = useContext(ThemeContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const existingUser = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    await signInUser(existingUser);
  };

  return (
    <>
      <Header />
      {theme === 'festive' && <Snow />}
      <h1>Sign-In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <Link to="/auth/sign-up">Need to create an account? Sign Up.</Link>
    </>
  );
}
