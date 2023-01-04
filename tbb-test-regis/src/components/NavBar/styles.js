import styled from "styled-components";

export const Container = styled.div`
  height: 49px;
  width: 100%;
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
  }

  li:hover {
    cursor: pointer;
  }

  svg {
    margin-left: 7px;
    margin-top: 3px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
