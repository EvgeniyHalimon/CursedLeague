import { useId, ChangeEvent } from 'react';

import { useAppSelector } from '../hooks/reduxHooks';
import useActions from '../hooks/useActions';
import { localStorageKeys } from '../shared/constants';
import { makeRoundRobinPairings } from '../shared/utils';

const PlayersForm = () => {
  const id = useId();
  const { players } = useAppSelector((state) => state.matchmaking);
  const action = useActions();

  const addPlayers = () => {
    action.setMatches(makeRoundRobinPairings(players));
    localStorage.setItem(localStorageKeys.cursedPlayers, JSON.stringify(players));
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const addedPlayers = e.target.value.split(',');
    action.setPlayers(addedPlayers);
  };

  return (
    <>
      <textarea name={id} id={id} onChange={onChange} value={players}>
      </textarea>
      <button onClick={addPlayers}>Submit</button>
    </>
  );
};

export { PlayersForm };

