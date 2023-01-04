import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 242px;
  background-color: var(--blue);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 25px;
    cursor: pointer;
    color: var(--white);
  }

  .footerIcons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 500px;
  }

  .footerLogo {
    width: 116px;
    height: 29px;
    cursor: pointer;
  }

  svg {
    width: 43px;
    height: 43px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 50px;

    ul {
      flex-direction: column;
    }

    .footerIcons {
      gap: 90px;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;
    }
  }
`;
