import Header from './Header';
import GiftForm from './GiftForm';
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
import Snow from './Snow/Snow';

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      {theme === 'festive' && <Snow />}
      <h1>Welcome Home!</h1>
      <div>
        <h2>Stash a Gift</h2>
        <GiftForm />
      </div>
    </>
  );
}
