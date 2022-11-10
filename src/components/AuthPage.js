import { useParams } from 'react-router-dom';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function Auth() {
  const { type: authMethod } = useParams();
  // const presentableAuthMethod = authMethod === 'sign-in' ? 'Sign In' : 'Sign Up';
  return (
    <div>
      {(authMethod === 'sign-up' && <h1>Sign-Up</h1>) ||
        (authMethod === 'sign-in' && <h1>Sign-In</h1>)}

      {authMethod === 'sign-up' ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}
