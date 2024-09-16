import PropTypes from 'prop-types';
import '../../styles/_modal.sass'

const Modal = ({ isOpen, onClose, character }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>X</button>
          <img src={character.image} alt={character.name} className="modal-image" />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
        </div>
      </div>
    );
  };
  
  Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    character: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default Modal;