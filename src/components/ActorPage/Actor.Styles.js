import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  width: 90%;
  max-width: var(--maxWidth);
  display: grid;
  grid-gap: 1.5rem;
  margin: 0 auto;
  padding: 1rem 0 2rem;
  transition: var(--transition);

  @media screen and (min-width: 1200px) {
    width: 90%;
    grid-template-columns: 350px 1fr;
    padding: 2rem 0;
    grid-gap: 2rem;
  }
`;

export const Aside = styled.div`
  transition: var(--transition);

  h3 {
    margin-top: 1.5rem;
  }
  img {
    display: block;
    width: 100%;
    border-radius: 15px;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 690px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    h3 {
      margin-top: 1rem;
    }
  }

  @media screen and (min-width: 1200px) {
    display: initial;

    h3 {
      margin-top: 1.5rem;
    }
  }
`;

export const Main = styled.div`
  h1 {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 1rem;
  }
`;
