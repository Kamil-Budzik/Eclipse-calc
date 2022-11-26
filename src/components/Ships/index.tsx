import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { openModal } from 'store/modalSlice';
import { Ship } from 'store/shipsSlice';
import ShipListItem from './ShipsListItem';
import { SemiTitle } from './styles';

function Ships() {
  const ships = useSelector((state: RootState) => state.ships.ships);
  const dispatch = useDispatch();

  return (
    <article>
      <header>
        <SemiTitle>Attacker</SemiTitle>
        <button onClick={() => dispatch(openModal())}>Add ship</button>
        <ul>
          {ships
            .filter((ship) => ship.type === 'attacker')
            .map((ship: Ship) => (
              <ShipListItem {...ship} key={ship.id} />
            ))}
        </ul>
        <SemiTitle>Defender</SemiTitle>
        <button onClick={() => dispatch(openModal())}>Add ship</button>
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
