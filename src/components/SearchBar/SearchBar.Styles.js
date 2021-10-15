import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: var(--lightBlack);
`;

export const Content = styled.div`
  width: 95%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.div`
  width: 50%;
  padding: 0.5rem 0;
  img {
    width: 25px;
    position: absolute;
    z-index: 111;
    left: 10px;
    top: 17px;
  }

  @media screen and (max-width: 689px) {
    width: 80%;
  }

  input {
    width: 85%;
    padding: 0.7rem 0.7rem 0.7rem 50px;
    background: var(--lightGrey);
    border: none;
    border-radius: 50px;
    color: var(--white);
    font-size: 1.2rem;
    transition: var(--transition);

    :focus {
      outline: none;
    }

    @media screen and (min-width: 690px) {
      width: 70%;

      :focus {
        width: 90%;
      }
    }

    @media screen and (min-width: 960px) {
      width: 67%;

      :focus {
        width: 85%;
      }
    }

    @media screen and (min-width: 1200px) {
      width: 47%;

      :focus {
        width: 65%;
      }
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  @media screen and (min-width: 968px) {
    justify-content: flex-end;
    padding: 0;
  }
`;

export const ListContainer = styled.div`
  height: 0;
  background: var(--lightBlack);
  color: white;
  width: 50vw;
  max-width: 180px;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2000;
  transition: var(--transition);

  @media screen and (min-width: 968px) {
    max-width: 280px !important;
    height: 100% !important;
    position: inherit;
    top: inherit;
    margin: auto 0;
  } ;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    label {
      display: block;
      padding: 1rem 0.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        margin-right: 10px;
      }
      input {
        height: 15px;
        width: 15px;
      }
    }
  }

  @media screen and (min-width: 968px) {
    flex-direction: row;
    height: 100%;
    text-align: right;

    form {
      label {
        display: inline-block;
        margin-left: 25px;
      }
    }
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
