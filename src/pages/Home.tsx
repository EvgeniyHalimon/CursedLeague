import { FC, useState, useEffect } from 'react';

import { createPairs, createTours } from '../shared/utils/createTours';

const players = [
  'A',
  'B',
  'C',
  'D',
  'E',
];

const Home: FC = () => {
  const [matches, setMatches] = useState<string[][]>([]);

  useEffect(() => {
    setMatches(createTours(createPairs(players), players));
  }, []);
  
  return (
    <div>
      {matches.map((match: string[], i: number) =>
        <ul key={i} style={{ padding: '10px' }}>
          {match.map((m: string, idx: number) =>
            <li key={idx}>{m}</li>,
          )}
        </ul>,
      )}
    </div>
  );
};

export { Home };