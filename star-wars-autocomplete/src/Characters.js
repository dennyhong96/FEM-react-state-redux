import React from 'react';
import { useSelector } from 'react-redux';

import Character from './Character';

const Characters = () => {
  const characters = useSelector(({ characters }) => characters);

  return (
    <section className="Characters">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </section>
  );
};

export default Characters;
