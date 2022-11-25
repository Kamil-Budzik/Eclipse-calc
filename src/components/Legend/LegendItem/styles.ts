import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: calc(100% / 3);
  margin: 1em 0;
`;

export const Icon = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: normal;
  margin-left: 0.3em;
`;
