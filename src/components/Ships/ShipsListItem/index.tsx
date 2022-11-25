import RemoveButton from 'components/shared/Buttons/RemoveButton';
import ResetButton from 'components/shared/Buttons/ResetButton';
import { Ship } from '..';

import {
  StyledItem,
  Wrapper,
  ItemTitle,
  List,
  StyledLi,
  StyledCategory,
} from './styles';

interface Props extends Ship {
  handleItemClick: (id: string, v: string) => void;
  handleShipRemove: (id: string) => void;
  handleShipReset: (id: string) => void;
}

function AttackerListItem({
  id,
  shipName,
  categories,
  handleItemClick,
  handleShipRemove,
  handleShipReset,
}: Props) {
  return (
    <StyledItem key={id}>
      <Wrapper>
        <ItemTitle>{shipName}</ItemTitle>
        <div className="buttons-wrapper">
          <ResetButton onClick={() => handleShipReset(id)}>Presets</ResetButton>
          <RemoveButton onClick={() => handleShipRemove(id)}>
            Remove
          </RemoveButton>
        </div>
      </Wrapper>
      <List>
        {categories.map((category, index) => (
          <StyledLi
            key={index}
            onClick={() => handleItemClick(id, category.name)}
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
