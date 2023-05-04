import React from 'react';
import './PlayerCard.css';

export interface PlayerCardProps {
  id: number;
  imageSrc: string;
  playerName: string;
  teamName: string;
  playerType: string;
  fantasyPoints: number;
}

const PlayerCard: React.FC<{ player: PlayerCardProps }> = ({ player }) => {
  console.log(player);
  console.log(player.id);
  return (
    <div className="PlayerCard PlayerCardOnDrag">
      <div className="PlayerCard-imageContainer">
        <img src={player.imageSrc} alt={`${player.playerName} headshot`} />
      </div>
      <div className="PlayerCard-info">
        <div className="PlayerCard-name">{player.playerName}</div>
        <div className="PlayerCard-team">{player.teamName}</div>
        <div className="PlayerCard-type">{player.playerType}</div>
        <div className="PlayerCard-fantasyPoints">
          Fantasy Points:{' '}
          {player.fantasyPoints == null ? 33 : player.fantasyPoints}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
