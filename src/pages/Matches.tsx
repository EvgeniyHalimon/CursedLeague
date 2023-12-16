/* eslint-disable comma-dangle */
import { useId } from 'react';

import { useAppSelector } from '../hooks/reduxHooks';

import { Tour } from '.';

const Matches = () => {
  const id = useId();
  const { matches } = useAppSelector((state) => state.matchmaking);

  return (
    <div style={{ width: '100vw' }}>
      {matches.map((match: string[], i: number) =>
        <ul key={`${id}${i}`} className='matches'>
          <Tour match={match}/>
        </ul>
      )}
    </div>
  );
};

export { Matches };