import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

interface IncrementCategoryPayload {
  shipId: string;
  categoryName: string;
}

export const shipsSlice = createSlice({
  name: 'ships',
  initialState: shipsState,
  reducers: {
    incrementCategory: (
      state,
      action: PayloadAction<IncrementCategoryPayload>
    ) => {
      if (!state.ships.length) return;

      let currentShip = state.ships.filter(
        (ship) => ship.id === action.payload.shipId
      )[0];

      const newCategories = currentShip.categories.map((category) => {
        if (category.name === action.payload.categoryName) {
          return { ...category, value: category.value + 1 };
        }
        return category;
      });

      const newShips = state.ships.map((ship: Ship) => {
        if (ship.id === action.payload.shipId) {
          return {
            ...ship,
            categories: newCategories,
          };
        }
        return ship;
      });

      state.ships = newShips;
    },
    removeShip: (state, action: PayloadAction<string>) => {
      const newShips = state.ships.filter(
        (ship: Ship) => action.payload !== ship.id
      );
      state.ships = newShips;
    },
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
export const { incrementCategory, removeShip } = shipsSlice.actions;

export default shipsSlice.reducer;
