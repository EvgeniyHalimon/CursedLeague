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
    <li  className='match'>
      <p className='player'>{playerOne.trim()}</p>
      <input 
        type='number' 
        className='score' 
        value={score.playerOne} 
        onChange={(e) => setPlayerScore(e, 'playerOne')}
        min={0}
      />
      <span> : </span>
      <input 
        type='number' 
        className='score' 
        value={score.playerTwo} 
        onChange={(e) => setPlayerScore(e, 'playerTwo')}
        min={0}
      />
      <p className='player'>{playerTwo.trim()}</p>
    </li>
  );
};

export { Game };