import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: var(--lightBlack);
`;

export const Content = styled.div`
  width: 93%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0;
  }
`;

export const Column = styled.div`
  padding: 1rem;
  color: white;
  background: var(--lightGrey);
  text-align: center;
  width: 80%;
  margin: 0 auto;

  :not(:last-of-type) {
    border-bottom: 2px solid var(--lightBlack);
  }

  p {
    margin-bottom: 0;
  }

  @media screen and (min-width: 960px) {
    max-width: 250px;
    border: none !important;
    border-radius: 30px;
  }
`;
