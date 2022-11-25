import Ships from 'components/Ships';
import PrimaryButton from 'components/shared/Buttons/PrimaryButton';
import Title from 'components/shared/Title';
import { RoutePaths } from 'router';
import { Wrapper } from './styles';

function PlayPage() {
  return (
    <Wrapper>
      <Title title="GAME" />
      <Ships />
      <PrimaryButton link={RoutePaths.RESULTS} text="CALCULATE" />
    </Wrapper>
  );
}

export default PlayPage;
