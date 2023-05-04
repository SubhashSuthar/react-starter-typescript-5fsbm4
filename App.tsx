import React from 'react';
import { ButtonCounter } from './components/ButtonCounter';
import PlayerCard from './components/PlayerCard';
import { PlayerCardProps } from './components/PlayerCard';

const players: PlayerCardProps[] = [
  {
    id: 1,
    imageSrc: 'https://static.thenounproject.com/png/2205027-200.png',
    playerName: 'Lionel Messi',
    teamName: 'Paris Saint-Germain',
    playerType: 'Forward',
    fantasyPoints: 120,
  },
  {
    id: 2,
    imageSrc: 'https://static.thenounproject.com/png/2205027-200.png',
    playerName: 'Cristiano Ronaldo',
    teamName: 'Manchester United',
    playerType: 'Forward',
    fantasyPoints: 110,
  },
];

export const App = () => {
  const name: string = 'Hello React Button';

  const onChildClicked = (e: number) => {
    console.warn('callback from parent triggered', e);
  };

  return (
    <div className="p-2">
      <h1>React TSX Starter</h1>
      <div>containing:</div>
      <ul>
        <li>React</li>
        <li>Twitter Bootstrap</li>
        <li>Basic Functional Components App and ButtonCounter</li>
      </ul>
      <div>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      <ButtonCounter name={name} onClicked={(e) => onChildClicked(e)} />
    </div>
  );
};
