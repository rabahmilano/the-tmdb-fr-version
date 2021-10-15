import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 41%,
      rgba(0, 0, 0, 0.2) 41%
    ),
    url(${(props) => props.image});
  background-size: 100%, cover;
  background-position: center top;
  height: 100%;
  min-height: calc(100vh - 9.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  height: 85%;
  min-height: 680px;
  border-radius: 25px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);

  @media screen and (min-width: 960px) {
    width: 95%;
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 35% 65%;
  }
`;

export const Poster = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.2) 50%
    ),
    url(${(props) => props.image});
  background-size: 100%, cover;
  background-position: center;

  height: 450px;
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
  }

  @media screen and (min-width: 690px) {
    height: 900px;
  }

  @media screen and (min-width: 960px) {
    height: auto;
  }
`;

export const Text = styled.div`
  color: var(--white);
  width: 94%;
  margin: 20px auto;

  h2 {
    margin-bottom: 1.8rem;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    ~ p {
      font-size: 0.9rem;
    }
  }

  span.info {
    margin: 0 5px;
    padding: 0 10px;
    border-radius: 10px;
    background: var(--lightGrey);

    :first-of-type {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 690px) {
    padding: 1rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 2.5rem;
  }
`;
