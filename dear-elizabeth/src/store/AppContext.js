import React, { createContext, useContext, useState } from 'react';
import { letters as initialLetters } from '../data/letters';
import { characters as initialCharacters } from '../data/characters';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [letters, setLetters] = useState(initialLetters);
  const [characters, setCharacters] = useState(initialCharacters);
  
  const getLettersByCharacter = (characterId) => {
    return letters.filter(letter => 
      letter.author === characterId || 
      letter.recipients.includes(characterId)
    );
  };

  const getCharacterById = (characterId) => {
    return characters[characterId];
  };

  const getLetterById = (letterId) => {
    return letters.find(letter => letter.id === parseInt(letterId));
  };

  return (
    <AppContext.Provider value={{
      letters,
      characters,
      getLettersByCharacter,
      getCharacterById,
      getLetterById
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppData = () => useContext(AppContext);
