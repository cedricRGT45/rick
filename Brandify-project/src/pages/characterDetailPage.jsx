import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CharacterContext } from '../contexts/CharacterContext';
import '../styles/_CharacterDetail.sass';
import Blood from '../assets/images/blood.png';
import Hand from '../assets/images/hand.png';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { characters, loading, error } = useContext(CharacterContext);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  const character = characters.find(character => character.id === parseInt(id));

  if (!character) {
    return <p>Personnage non trouvé.</p>;
  }

  return (
    <div className="character-detail">
      <img src={Blood} alt="blood" className="blood" /> 
      <img src={Hand} alt="main ensanglanter" className="hand" />
      <img src={Hand} alt="main ensanglanter" className="hand2" />
      <Link to="/" className="logo-link">
        <div className='logo'>
          <span className="brand">Brand</span><span className="ifi">Ifi</span>
        </div>
      </Link>
      <button onClick={() => navigate('/')}>Retour à la page d&apos;accueil</button>
      <img src={character.image} alt={character.name} className="character-image" />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default CharacterDetailPage;
