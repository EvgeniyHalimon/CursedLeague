import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { setMatches } from '../shared/store/matchmakingSlice';


const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ setMatches }, dispatch);
};

export default useActions;