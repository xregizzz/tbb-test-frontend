import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 40px;
    margin-bottom: 90px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    width: 356px;
    height: 64px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 20px;
    font-family: Trebuchet MS;
    border: none;
    border-radius: 16px;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.9);
  }

  h2 {
    margin-bottom: 90px;
  }
`;
