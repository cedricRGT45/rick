import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from '../components/card/CharacterList';
import Header from '../components/header/header';
import Pagination from '../components/pagination/pagination';
import '../styles/_homepage.sass';
import Blood from'../assets/images/blood.png';
import Hand from '../assets/images/hand.png'
import { useNavigate } from 'react-router-dom'; 

const Homepage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 8;
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results);
      } catch (err) {
        console.error(err);
        setError('Erreur lors de la récupération des personnages');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    filterCharacters(query, filter);
  };

  const handleFilter = (status) => {
    setFilter(status);
    setCurrentPage(1);
    filterCharacters(searchQuery, status);
  };

  const filterCharacters = (query, status) => {
    let filtered = characters;

    if (status) {
      filtered = filtered.filter(character => character.status.toLowerCase() === status.toLowerCase());
    }

    if (query) {
      filtered = filtered.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));
    }

    setFilteredCharacters(filtered);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);

  const goToDetailPage = (id) => {
    localStorage.setItem('characters', JSON.stringify(characters)); // Stocke les personnages dans le localStorage
    navigate(`/character/${id}`);
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="homepage">
      <Header onSearch={handleSearchChange} onFilter={handleFilter} />
      <CharacterList
        characters={filteredCharacters}
        currentPage={currentPage}
        charactersPerPage={charactersPerPage}
        onCharacterClick={goToDetailPage} // Passe la fonction en prop
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <img src={Blood} alt="sang qui coule" className="blood" />
      <img src={Hand} alt="main ensanglanter" className="hand" />
    </div>
  );
};

export default Homepage;