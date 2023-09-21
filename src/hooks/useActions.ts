import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { setMatches, setPlayers, setMatchResults, setTournamentResults } from '../shared/store/matchmakingSlice';


const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ setMatches, setPlayers, setMatchResults, setTournamentResults }, dispatch);
};

export default useActions;