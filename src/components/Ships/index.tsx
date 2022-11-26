import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Ship } from 'store/shipsSlice';
import ShipListItem from './ShipsListItem';
import { SemiTitle } from './styles';

function Ships() {
  const ships = useSelector((state: RootState) => state.ships.ships);

  return (
    <article>
      <header>
        <SemiTitle>Attacker</SemiTitle>
        <ul>
          {ships
            .filter((ship) => ship.type === 'attacker')
            .map((ship: Ship) => (
              <ShipListItem {...ship} key={ship.id} />
            ))}
        </ul>
        <SemiTitle>Defender</SemiTitle>
        <ul>
          {ships
            .filter((ship) => ship.type === 'defender')
            .map((ship: Ship) => (
              <ShipListItem {...ship} key={ship.id} />
            ))}
        </ul>
      </header>
    </article>
  );
}

export default Ships;
