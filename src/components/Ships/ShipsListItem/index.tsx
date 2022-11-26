import { useDispatch } from 'react-redux';
import RemoveButton from 'components/shared/Buttons/RemoveButton';
import ResetButton from 'components/shared/Buttons/ResetButton';
import {
  incrementCategory,
  Ship,
  removeShip,
  resetShip,
} from 'store/shipsSlice';
import {
  StyledItem,
  Wrapper,
  ItemTitle,
  List,
  StyledLi,
  StyledCategory,
} from './styles';
import { openModal } from 'store/modalSlice';

function AttackerListItem({ id, shipName, categories }: Ship) {
  const dispatch = useDispatch();

  const handleIncrementCategory = (shipId: string, categoryName: string) => {
    dispatch(incrementCategory({ shipId, categoryName }));
  };

  const handleRemoveShip = (shipId: string) => {
    dispatch(removeShip(shipId));
  };

  const handleResetShip = (shipId: string) => {
    dispatch(resetShip(shipId));
  };

  return (
    <StyledItem key={id}>
      <Wrapper>
        <div className="buttons-wrapper">
          <ItemTitle>{shipName}</ItemTitle>
          <button onClick={() => dispatch(openModal())}>Add ship</button>
        </div>
        <div className="buttons-wrapper">
          <ResetButton onClick={() => handleResetShip(id)}>Presets</ResetButton>
          <RemoveButton onClick={() => handleRemoveShip(id)}>
            Remove
          </RemoveButton>
        </div>
      </Wrapper>
      <List>
        {categories.map((category, index) => (
          <StyledLi
            key={index}
            onClick={() => handleIncrementCategory(id, category.name)}
          >
            <StyledCategory>
              {category.icon}
              {category.value}
            </StyledCategory>
          </StyledLi>
        ))}
      </List>
    </StyledItem>
  );
}

export default AttackerListItem;
