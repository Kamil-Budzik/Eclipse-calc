import RemoveButton from 'components/shared/Buttons/RemoveButton';
import styled from 'styled-components';
import { Ship } from './index';

export const SemiTitle = styled.h3`
  font-weight: 500;
  font-size: 1.4rem;
`;

export const StyledItem = styled.li`
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-cols: 1fr;
  margin: 1em 0;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;

  .buttons-wrapper {
    display: flex;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 1rem;
  padding: 0.3em 0.4em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const List = styled.ul`
    grid-row; 2/-1;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-evenly;
`;

export const StyledLi = styled.li`
  cursor: pointer;
  transition: 0.5s ease-in-out;
  margin: 1em;
  *:hover {
    background-color: #ddd;
  }
`;

export const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

interface Props extends Ship {
  handleItemClick: (id: string, v: string) => void;
  handleShipRemove: (id: string) => void;
}

function AttackerListItem({
  id,
  shipName,
  categories,
  handleItemClick,
  handleShipRemove,
}: Props) {
  return (
    <StyledItem key={id}>
      <Wrapper>
        <ItemTitle>{shipName}</ItemTitle>
        <div className="buttons-wrapper">
          <button>Presets</button>
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
