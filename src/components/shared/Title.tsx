import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
`;

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return (
    <header className="App-header">
      <StyledTitle>{title}</StyledTitle>
    </header>
  );
}

export default Title;
