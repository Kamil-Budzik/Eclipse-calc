import Attacker from 'components/Attacker';
import PrimaryButton from 'components/shared/Buttons/PrimaryButton';
import Title from 'components/shared/Title';
import { RoutePaths } from 'router';
import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 1080px;
  margin: 0 auto;
`;

export const Content = styled.section``;

function PlayPage() {
  return (
    <Wrapper>
      <Title title="GAME" />
      <Attacker />
      <PrimaryButton link={RoutePaths.RESULTS} text="CALCULATE" />
    </Wrapper>
  );
}

export default PlayPage;
