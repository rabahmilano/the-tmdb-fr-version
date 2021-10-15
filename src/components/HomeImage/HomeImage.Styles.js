import styled from "styled-components";

export const Wrapper = styled.div`
  height: 500px;
  width: 100%;
  margin: 0;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.image});
  background-position: center;
  background-size: 100%, cover;
  transition: var(--transition);
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 700px;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  max-width: var(--maxWidth);
  margin: 0 auto;
  height: 100%;

  @media screen and (min-width: 690px) {
    padding: 2rem;
  }
`;

export const Text = styled.div`
  position: absolute;
  bottom: 4rem;
  color: var(--white);
  width: 94%;
  max-width: 550px;
  transition: var(--transition);

  h3 {
    line-height: 2.3rem;
    letter-spacing: 1px;
  }

  p {
    line-height: 1.5;
  }

  @media screen and (min-width: 968px) {
    max-width: 700px;
  }
`;
