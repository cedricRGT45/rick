import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/_CharacterCard.sass';

const CharacterCard = ({ character }) => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate(`/character/${character.id}`); 
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>

      <button onClick={handleNavigate}>Action</button> 
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,

  }).isRequired,
};

export default CharacterCard;