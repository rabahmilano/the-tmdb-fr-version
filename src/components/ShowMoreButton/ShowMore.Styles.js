import styled from "styled-components";

export const Wrapper = styled.div`
  width: 60%;
  max-width: 350px;
  background: var(--lightGrey);
  border-radius: 50px;
  color: var(--white);
  text-align: center;
  margin: 0 auto 1.5rem;
  padding: 13px 20px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);

  :hover {
    opacity: 0.8;
  }
`;
