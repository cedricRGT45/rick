import { Link } from 'react-router-dom';
import Search from '../Search/search';
import FilterButtons from '../Button/filterButtons';
import PropTypes from 'prop-types';
import '../../styles/_header.sass';

const Header = ({ onFilter, onSearch }) => {
  return (
    <header className="header">
      <div className='logo'>
        <Link to="/" className="logo-link">
          <span className="brand">Brand</span><span className="ifi">Ifi</span>
        </Link>
      </div>
      <div className='barre'>
        <FilterButtons onFilter={onFilter} />
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
};

Header.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;
