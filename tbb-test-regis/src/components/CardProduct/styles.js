import styled from "styled-components";

export const Container = styled.div`
  width: 356px;
  height: 531px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: #00000014 0px 3px 16px;

  img {
    width: 11rem;
    height: 351px;
  }

  p {
    text-align: center;
    padding: 13px;
  }

  button {
    width: 356px;
    height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 25px;
    border: none;
    cursor: pointer;
    border-radius: 0px 0px 16px 16px;
  }

  button:hover {
    filter: brightness(0.9);
  }

  .wellness {
    background-color: var(--blue);
  }

  .active {
    background-color: var(--green);
  }

  .agecare {
    background-color: var(--pink);
  }
`;
