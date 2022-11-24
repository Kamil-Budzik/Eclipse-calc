import Legend from 'components/Legend';
import Title from 'components/shared/Title';
import { Wrapper, Typography } from './index.styles';

function MainPage() {
  return (
    <Wrapper>
      <Title title="Eclipse calculator" />
      <section>
        <Typography>
          Lorem ipsum dolor sit amet consectetur. Aliquam ipsum eu malesuada a
          in vulputate. Molestie libero volutpat lorem at ipsum est scelerisque
          orciamet.
        </Typography>
        <Typography>
          At urna et massa cursus duis curabitur ornare egestas senectus.
          Aliquet arcu morbi iaculis eget nulla diam in sem quis. Lorem ipsum
          dolor sit amet consectetur. Aliquam ipsum eu malesuada a in vulputate.
          Molestie libero volutpat lorem at ipsum est scelerisque orci amet. At
          urna et massa cursus duis curabitur ornare egestas senectus. Aliquet
          arcu morbi iaculis eget nulla diam in sem quis.
        </Typography>
      </section>
      <Legend />
    </Wrapper>
  );
}

export default MainPage;
