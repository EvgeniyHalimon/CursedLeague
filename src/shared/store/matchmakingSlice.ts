import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  matches: string[][]
}

const initialState: CounterState = {
  matches: [],
};

export const matchmakingSlice = createSlice({
  name: 'matchmaking',
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<string[][]>) => {
      state.matches = action.payload;
    },
  },
});

export const { setMatches } = matchmakingSlice.actions;
