import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <header className={`p-4 flex justify-between ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-xl font-bold">
        <Link to={`/`}>Themed Blog</Link>
      </h1>
      <button 
        onClick={() => dispatch(toggleTheme())} 
        className="p-2 border rounded ml-4 cursor-pointer"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;