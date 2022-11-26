import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import shipsState from './shipsState';

export interface ShipCategory {
  value: number;
  icon: ReactElement;
  name: string;
}

export interface Ship {
  id: string;
  shipName: string;
  type: 'attacker' | 'defender';
  categories: ShipCategory[];
}

export interface ShipsState {
  ships: Ship[];
}

export const shipsSlice = createSlice({
  name: 'ships',
  initialState: shipsState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = shipsSlice.actions;

export default shipsSlice.reducer;
