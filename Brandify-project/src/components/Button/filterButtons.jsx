import PropTypes from 'prop-types';
import '../../styles/_button.sass'

const FilterButtons = ({ onFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => onFilter('alive')}>Alive</button>
      <button onClick={() => onFilter('dead')}>Dead</button>
      <button onClick={() => onFilter(null)}>All</button> 
    </div>
  );
};

FilterButtons.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FilterButtons;
