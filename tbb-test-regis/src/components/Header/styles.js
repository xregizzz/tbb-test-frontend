import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  background-color: var(--white);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 79px;
    width: 195px;
  }

  .headerLogo {
    display: flex;
    justify-content: end;
    width: 54%;
  }

  .searchLogo {
    display: flex;
    justify-content: center;
    width: 46%;
  }

  .searchLogo:hover {
    cursor: pointer;
  }

  .headerLogo:hover {
    cursor: pointer;
  }
`;
