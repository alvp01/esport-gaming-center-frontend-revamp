import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAuthUser, useAuthHeader } from 'react-auth-kit';
import GameService from '../../services/GameService';


function GameItem({ game, classNames }) {
  const user = useAuthUser();
  const header = useAuthHeader();
  const gameService = new GameService(header(), user().email);
  const navigate = useNavigate();

  const searchGameURL = new URL(`${process.env.BASE_API_URL}/api/games/${game.id}`);


  const findGame = () => {
    gameService.getGame(searchGameURL);
    navigate('../details/GameDetails.js');
  };

  return (
    <li style={{ width: '18rem' }}>
      <button
        onClick={() => findGame()}
        className={classNames.button}
        type="button"
      >
        <div className={classNames.gameBody}>
          <div className={classNames.imageContainer}>
            <img
              src={game.image}
              alt={game.name}
              className={classNames.image}
            />
          </div>
          <h6 className={classNames.title}>{game.name}</h6>
          <p className={classNames.discription}>{game.description}</p>
        </div>
      </button>
    </li>
  );
}

GameItem.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  classNames: PropTypes.shape({
    button: PropTypes.string,
    gameBody: PropTypes.string,
    imageContainer: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    discription: PropTypes.string,
  }).isRequired,
};

export default GameItem;
