import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import uniqId from 'uniqid';
import RandomIcon from 'assets/shipIcons/RandomIcon';
import AttackerListItem from './AttackerListItem';

export const SemiTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
`;

export interface ShipCategory {
  value: number;
  icon: ReactElement;
  name: string;
}

export interface Ship {
  id: string;
  shipName: string;
  categories: ShipCategory[];
}

function Attacker() {
  const [ships, setShips] = useState<Ship[]>([
    {
      id: uniqId(),
      shipName: 'zajebisty typ',
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
      id: uniqId(),
      shipName: 'zajebista typiara',
      categories: [
        { name: 'cat1', value: 0, icon: <RandomIcon /> },
        { name: 'cat2', value: 0, icon: <RandomIcon /> },
        { name: 'cat3', value: 0, icon: <RandomIcon /> },
        { name: 'cat4', value: 0, icon: <RandomIcon /> },
        { name: 'cat5', value: 0, icon: <RandomIcon /> },
        { name: 'cat6', value: 0, icon: <RandomIcon /> },
      ],
    },
  ]);

  const handleItemClick = (shipId: string, categoryName: string) => {
    if (!ships.length) return;

    let currentShip = ships.filter((ship: Ship) => ship.id === shipId)[0];
    const newCategories = currentShip.categories.map((category) => {
      if (category.name === categoryName) {
        return { ...category, value: category.value + 1 };
      }
      return category;
    });

    const newShips = ships.map((ship: Ship) => {
      if (ship.id === shipId) {
        return {
          ...ship,
          categories: newCategories,
        };
      }
      return ship;
    });

    setShips(newShips);
  };

  const handleShipRemove = (shipId: string) => {
    const newShips = ships.filter((ship: Ship) => shipId !== ship.id);
    setShips(newShips);
  };

  return (
    <article>
      <header>
        <SemiTitle>Attacker</SemiTitle>
        <ul>
          {ships.map((ship: Ship) => (
            <AttackerListItem
              {...ship}
              key={ship.id}
              handleItemClick={handleItemClick}
              handleShipRemove={handleShipRemove}
            />
          ))}
        </ul>
      </header>
    </article>
  );
}

export default Attacker;
