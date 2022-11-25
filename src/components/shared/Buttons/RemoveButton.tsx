import styled from 'styled-components';

const RemoveButton = styled.button`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fb4e4e;
  border: none;
  color: white;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f10505;
  }
`;

export default RemoveButton;
