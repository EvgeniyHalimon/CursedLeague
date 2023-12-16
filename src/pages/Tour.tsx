/* eslint-disable comma-dangle */
import { FC, useId } from 'react';

import { Game } from '.';

const Tour: FC<{match: string[]}> = ({ match }) => {
  const id = useId();

  const splitByGame = match.map((m) => {
    return m.split(' : ').map((m) => m.trim());
  });

  return (
    <div>
      {splitByGame.map((game: string[], idx: number) =>
        <Game playerOne={game[0]} playerTwo={game[1]} key={`${id}${idx}`}/>
      )}
    </div>
  );
};

export { Tour };