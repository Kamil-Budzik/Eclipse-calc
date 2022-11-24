import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 154px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 23px;
  background-color: #3c7dfb;
  border: none;
  color: white;
  border-radius: 15px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background-color: #0450e4;
    font-size: 1.3rem;
  }
`;

interface Props {
  text: string;
}

function PrimaryButton({ text }: Props) {
  return <StyledButton>{text}</StyledButton>;
}

export default PrimaryButton;
