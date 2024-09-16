import PropTypes from 'prop-types';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
      &laquo;
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={index + 1 === currentPage ? 'active' : ''}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
      &raquo;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;