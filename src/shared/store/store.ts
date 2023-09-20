import { configureStore } from '@reduxjs/toolkit';

import { matchmakingSlice } from './matchmakingSlice';

export const store = configureStore({
  reducer: {
    matchmaking: matchmakingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch