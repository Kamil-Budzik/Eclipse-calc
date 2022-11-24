import { Title as StyledTitle } from './Title.styles';

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
