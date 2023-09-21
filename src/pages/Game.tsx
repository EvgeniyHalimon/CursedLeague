import { ChangeEvent, FC, useState } from 'react';

interface IGame{
    playerOne:string, 
    playerTwo:string
}

const Game: FC<IGame> = ({ playerOne, playerTwo }) => {
  const [score, setScore] = useState({ playerOne: 0, playerTwo: 0 });

  const setPlayerScore = (e: ChangeEvent<HTMLInputElement>, key: 'playerOne' | 'playerTwo') => {
    setScore({ ...score, [key]: Number(e.target.value) });
  };

  return (
    <>
      <li  className='match'>
        <p className='player'>{playerOne}</p>
        <input 
          type='number' 
          className='score' 
          value={score.playerOne} 
          onChange={(e) => setPlayerScore(e, 'playerOne')}
        />
        <span> : </span>
        <input 
          type='number' 
          className='score' 
          value={score.playerTwo} 
          onChange={(e) => setPlayerScore(e, 'playerTwo')}
        />
        <p className='player'>{playerTwo}</p>
      </li>,
    </>
  );
};

export { Game };