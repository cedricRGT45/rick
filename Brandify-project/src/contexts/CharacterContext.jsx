import  { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (err) {
        console.error(err);
        setError('Erreur lors de la récupération des personnages');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, loading, error }}>
      {children}
    </CharacterContext.Provider>
  );
};

// Validation des props
CharacterProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};