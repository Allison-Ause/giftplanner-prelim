import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext.js';
import { signOut } from '../utils/fetch-utils.js';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSignOut = async () => {
    await signOut();
  };

  const handleTheme = async () => {
    if (theme === 'default') {
      setTheme('festive');
    } else {
      setTheme('default');
    }
  };
  return (
    <>
      <button onClick={handleTheme}>Change Theme</button>
      <div onClick={handleSignOut}>
        <p>Sign Out</p>
      </div>
    </>
  );
}
