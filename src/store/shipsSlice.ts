import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import shipsState, { defaultCategories } from './shipsState';
import uniqid from 'uniqid';

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

interface AddShipPayload {
  shipName: string;
  // dodaj co tam potrzebujesz mieć
}

export const shipsSlice = createSlice({
  name: 'ships',
  initialState: shipsState,
  reducers: {
    addShip: (state, action: PayloadAction<AddShipPayload>) => {
      console.log('Na razie ciężko to zaimplementować', action.payload);
      state.ships.push({
        id: uniqid(),
        shipName: action.payload.shipName,
        type: 'attacker',
        categories: defaultCategories,
      });
      // Zmień sobie typy na takie jakie będą ostatecznie i będzie z górki;
    },
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
    resetShip: (state, action: PayloadAction<string>) => {
      const newShips = state.ships.map((ship: Ship) => {
        if (action.payload === ship.id) {
          const defaultCategories = ship.categories.map((category) => {
            return { ...category, value: 0 };
          });
          return { ...ship, categories: defaultCategories };
        }
        return ship;
      });
      state.ships = newShips;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementCategory, removeShip, resetShip, addShip } =
  shipsSlice.actions;

export default shipsSlice.reducer;
