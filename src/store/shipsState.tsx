import RandomIcon from 'assets/shipIcons/RandomIcon';
import { ShipsState } from './shipsSlice';

const shipsState: ShipsState = {
  ships: [
    {
      id: '123',
      shipName: 'zajebisty typ',
      type: 'attacker',
      categories: [
        { name: 'cat1', value: 0, icon: <RandomIcon /> },
        { name: 'cat2', value: 0, icon: <RandomIcon /> },
        { name: 'cat3', value: 0, icon: <RandomIcon /> },
        { name: 'cat4', value: 0, icon: <RandomIcon /> },
        { name: 'cat5', value: 0, icon: <RandomIcon /> },
        { name: 'cat6', value: 0, icon: <RandomIcon /> },
      ],
    },
    {
      id: '456',
      shipName: 'KOKS',
      type: 'attacker',
      categories: [
        { name: 'cat1', value: 0, icon: <RandomIcon /> },
        { name: 'cat2', value: 0, icon: <RandomIcon /> },
        { name: 'cat3', value: 0, icon: <RandomIcon /> },
        { name: 'cat4', value: 0, icon: <RandomIcon /> },
        { name: 'cat5', value: 0, icon: <RandomIcon /> },
        { name: 'cat6', value: 0, icon: <RandomIcon /> },
      ],
    },
    {
      id: '789',
      shipName: 'zajebista typiara',
      type: 'defender',
      categories: [
        { name: 'cat1', value: 0, icon: <RandomIcon /> },
        { name: 'cat2', value: 0, icon: <RandomIcon /> },
        { name: 'cat3', value: 0, icon: <RandomIcon /> },
        { name: 'cat4', value: 0, icon: <RandomIcon /> },
        { name: 'cat5', value: 0, icon: <RandomIcon /> },
        { name: 'cat6', value: 0, icon: <RandomIcon /> },
      ],
    },
  ],
};

export default shipsState;
