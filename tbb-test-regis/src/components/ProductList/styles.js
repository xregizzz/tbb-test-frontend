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
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-bottom: 90px;
  }

  @media (max-width: 768px) {
    ul {
      width: 430px;
      overflow-y: auto;
      justify-content: flex-start;
    }
  }
`;
