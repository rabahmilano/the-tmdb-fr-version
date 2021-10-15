import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
  transition: var(--transition);

  @media screen and (min-width: 968px) {
    height: 6rem;
  } ;
`;

export const Content = styled.div`
  width: 93%;
  max-width: var(--maxWidth);
  height: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const LogoImg = styled.img`
  width: 180px;
  height: 100%;
  transition: var(--transition);

  @media screen and (min-width: 968px) {
    width: 280px;
  } ;
`;

export const Menu = styled.div`
  width: 40px;
  height: 40px;
  margin: auto 0;

  @media screen and (min-width: 968px) {
    display: none !important;
  } ;
`;

export const Icon = styled.img`
  width: 40px;
  transition: var(--transition);

  :hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

export const ButtonList = styled.div`
  height: 0;
  overflow-y: hidden;
  background: var(--black);
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 2000;
  transition: var(--transition);

  @media screen and (min-width: 968px) {
    width: 30% !important;
    max-width: 280px !important;
    height: 100% !important;
    position: inherit;
    top: inherit;
    margin: auto 0;
  } ;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  div {
    width: 100%;
  }

  @media screen and (min-width: 968px) {
    flex-direction: row;
    padding: 1rem 0 2rem;
    padding: 1rem;
    height: 100%;
  } ;
`;
export const Button = styled.button`
  font-family: "Roboto Mono";
  font-size: 1rem;
  width: 100%;
  padding: 1rem 0;
  border: none;
  background: transparent;
  color: var(--white);
  transition: var(--transition);

  :hover {
    background: var(--lightBlack);
    letter-spacing: 2px;
  }

  &.active {
    background: var(--red);
  }

  @media screen and (min-width: 968px) {
    &.first {
      border-radius: 30px 0 0 30px;
    }
    &.second {
      border-radius: 0 30px 30px 0;
    }
  }
`;
