import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 3rem 1.5rem;

  &.full {
    padding: 2rem 0;

    @media screen and (min-width: 1200px) {
      padding: 3rem 1rem;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 2.5rem 3rem;
  padding: 2rem 0;

  @media screen and (min-width: 690px) {
    grid-gap: 3.2rem 3rem;

    ${Wrapper}.full & {
      grid-gap: 2rem;
    }
  }
`;
