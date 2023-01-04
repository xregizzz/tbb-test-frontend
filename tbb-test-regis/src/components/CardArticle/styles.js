import styled from "styled-components";

export const Container = styled.div`
  width: 356px;
  height: 355px;
  background-color: var(--white);
  box-shadow: 0px 3px 16px #00000014;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
    margin-bottom: 30px;
  }

  img {
    width: 357px;
    height: 232px;
  }
`;
