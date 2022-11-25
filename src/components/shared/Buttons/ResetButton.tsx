import styled from 'styled-components';

const ResetButton = styled.button`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6f160;
  border: none;
  color: black;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #d8e814;
  }
`;

export default ResetButton;
