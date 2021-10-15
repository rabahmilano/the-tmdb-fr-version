import styled from "styled-components";

export const Wrapper = styled.div`
  height: 400px;
  border-radius: 30px 30px 0 0;
  background: url(${(props) => props.image});
  background-position: center;
  background-size: cover;

  :hover :first-child {
    transform: translateY(0);
  }

  @media screen and (min-width: 690px) {
    height: 300px;
  }

  @media screen and (min-width: 960px) {
    height: 320px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CardInfo = styled.div`
  color: var(--white);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.6);
  transform: translateY(100%);
  transition: var(--transition);

  p {
    font-size: 12px;
  }
`;

export const CardRating = styled.div`
  position: absolute;
  right: -20px;
  bottom: -20px;
  color: white;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.7);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
