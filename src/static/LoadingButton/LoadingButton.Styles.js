import styled from "styled-components";

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: transparent;
  border: 5px solid var(--lightRed);
  border-bottom: 5px solid transparent;
  animation: loadingCircle 0.8s infinite;
  margin: 0 auto;

  @keyframes loadingCircle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 960px) {
    width: 80px;
    height: 80px;
  }
`;
