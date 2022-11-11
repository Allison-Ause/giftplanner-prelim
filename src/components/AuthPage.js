import { useParams } from 'react-router-dom';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function Auth() {
  const { type: authMethod } = useParams();
  return <div>{authMethod === 'sign-up' ? <SignUpForm /> : <SignInForm />}</div>;
}
