import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: var(--lightBlack);
`;

export const Content = styled.div`
  width: 92%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1rem;
  background: transparent;
  color: var(--white);

  a {
    color: var(--white);
    margin-bottom: 0;
    transition: var(--transition);

    :hover {
      letter-spacing: 1px;
      color: var(--lightRed);
    }
  }
  span {
    margin-left: 5px;
  }
`;
