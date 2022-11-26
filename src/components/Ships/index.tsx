import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Ship } from 'store/shipsSlice';
import ShipListItem from './ShipsListItem';
import { SemiTitle } from './styles';

function Ships() {
  const ships = useSelector((state: RootState) => state.ships.ships);
  const handleItemClick = (shipId: string, categoryName: string) => {};

  const handleShipRemove = (shipId: string) => {
    // const newShips = ships.filter((ship: Ship) => shipId !== ship.id);
    // setShips(newShips);
  };

  const handleShipReset = (shipId: string) => {
    // const newShips = ships.map((ship: Ship) => {
    //   if (shipId === ship.id) {
    //     const defaultCategories = ship.categories.map((category) => {
    //       return { ...category, value: 0 };
    //     });
    //     return { ...ship, categories: defaultCategories };
    //   }
    //   return ship;
    // });
    // setShips(newShips);
  };

  return (
    <article>
      <header>
        <SemiTitle>Attacker</SemiTitle>
        <ul>
          {ships
            .filter((ship) => ship.type === 'attacker')
            .map((ship: Ship) => (
              <ShipListItem
                {...ship}
                key={ship.id}
                handleItemClick={handleItemClick}
                handleShipRemove={handleShipRemove}
                handleShipReset={handleShipReset}
              />
            ))}
        </ul>
        <SemiTitle>Defender</SemiTitle>
        <ul>
          {ships
            .filter((ship) => ship.type === 'defender')
            .map((ship: Ship) => (
              <ShipListItem
                {...ship}
                key={ship.id}
                handleItemClick={handleItemClick}
                handleShipRemove={handleShipRemove}
                handleShipReset={handleShipReset}
              />
            ))}
        </ul>
      </header>
    </article>
  );
}

export default Ships;
