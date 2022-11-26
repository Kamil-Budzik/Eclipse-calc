import RandomIcon from 'assets/shipIcons/RandomIcon';
import { ShipsState } from './shipsSlice';

export const defaultCategories = [
  { name: 'cat1', value: 0, icon: <RandomIcon /> },
  { name: 'cat2', value: 0, icon: <RandomIcon /> },
  { name: 'cat3', value: 0, icon: <RandomIcon /> },
  { name: 'cat4', value: 0, icon: <RandomIcon /> },
  { name: 'cat5', value: 0, icon: <RandomIcon /> },
  { name: 'cat6', value: 0, icon: <RandomIcon /> },
];

const shipsState: ShipsState = {
  ships: [
    {
      id: '123',
      shipName: 'zajebisty typ',
      type: 'attacker',
      categories: defaultCategories,
    },
    {
      id: '456',
      shipName: 'KOKS',
      type: 'attacker',
      categories: defaultCategories,
    },
    {
      id: '789',
      shipName: 'zajebista typiara',
      type: 'defender',
      categories: defaultCategories,
    },
  ],
};

export default shipsState;
