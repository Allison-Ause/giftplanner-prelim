// import { UserContext } from '../context/userContext';
// import { useContext } from 'react';
// import { Redirect } from 'react-router-dom';
import { signUpUser } from '../utils/fetch-utils';
import Header from './Header.js';

export default function SignUpForm() {
  // const { user } = useContext(UserContext);

  // if (user) return <Redirect to="/" />;

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newUser = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    await signUpUser(newUser);
  };

  return (
    <>
      <Header />
      <h1>Sign-Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
