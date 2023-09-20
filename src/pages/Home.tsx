import { useId } from 'react';

import { useAppSelector } from '../hooks/reduxHooks';

import { PlayersForm } from '.';

const Home = () => {
  const id = useId();
  const { matches } = useAppSelector((state) => state.matchmaking);

  return (
    <>
      <PlayersForm/>
      <div>
        {matches.map((match: string[], i: number) =>
          <ul key={`${id}${i}`} style={{ padding: '10px' }}>
            {match.map((m: string, idx: number) =>
              <li key={`${id}${idx}`}>{m}</li>,
            )}
          </ul>,
        )}
      </div>
    </>
  );
};

export { Home };