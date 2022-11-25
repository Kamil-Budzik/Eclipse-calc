import { Link } from 'react-router-dom';
import { RoutePaths } from 'router';
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

interface Props {
  text: string;
  link: RoutePaths;
}
// props destructuring allows us to pass there any html attr for button. For example now you can pass disabled attr
function PrimaryButton({ text, link }: Props, props: any) {
  return (
    <StyledLink to={link}>
      <StyledButton {...props}>{text}</StyledButton>
    </StyledLink>
  );
}

export default PrimaryButton;
