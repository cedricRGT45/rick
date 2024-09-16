import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../../styles/_CharacterList.sass'; 

const CharacterList = ({ characters, currentPage, charactersPerPage }) => {
  const startIndex = (currentPage - 1) * charactersPerPage;
  const currentCharacters = characters.slice(startIndex, startIndex + charactersPerPage);

  if (!currentCharacters.length) return <p>Aucun personnage trouvé.</p>;

  return (
    <div className='character-container'>
      <div className="character-list">
        {currentCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  charactersPerPage: PropTypes.number.isRequired,
};

export default CharacterList;