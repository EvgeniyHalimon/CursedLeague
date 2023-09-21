import { createSlice } from '@reduxjs/toolkit';

import { ITournamentResults } from '../types';

import type { PayloadAction } from '@reduxjs/toolkit';

interface IMatchMakingSliceState {
  matches: string[][],
  players: string[],
  matchResults: string[][],
  tournamentResults: [] | ITournamentResults[]
}

const initialState: IMatchMakingSliceState = {
  matches: [],
  players: [],
  matchResults: [],
  tournamentResults: [],
};

export const matchmakingSlice = createSlice({
  name: 'matchmaking',
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<string[][]>) => {
      state.matches = action.payload;
    },
    setPlayers: (state, action: PayloadAction<string[]>) => {
      state.players = action.payload;
    },
    setMatchResults: (state, action: PayloadAction<string[][]>) => {
      state.matchResults = action.payload;
    },
    setTournamentResults: (state, action: PayloadAction<ITournamentResults[]>) => {
      state.tournamentResults = action.payload;
    },
  },
});

export const { setMatches, setPlayers, setMatchResults, setTournamentResults } = matchmakingSlice.actions;
