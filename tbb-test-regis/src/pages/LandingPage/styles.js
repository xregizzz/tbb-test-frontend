import styled from "styled-components";

export const Container = styled.div`
  .header {
    width: 100%;
  }

  .main {
    width: 100%;
  }

  .mainBanner {
    width: 100%;
    max-height: 550px;
  }

  .iconsImage {
    height: 259px;
  }

  .midSection {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .midSectionTitle {
    margin: 50px 0 50px 0;
  }

  .midSectionFirstText {
    width: 550px;
    height: 251px;
    margin-bottom: 100px;
  }

  .midSectionSecondTitle {
    width: 744px;
    height: 96px;
    margin: 90px 0 50px 0;
  }

  .midSectionSecontText {
    width: 744px;
    height: 151px;
    margin-bottom: 150px;
  }

  .midBanner {
    width: 100%;
    margin: 100px 0 100px 0;
  }

  @media (max-width: 768px) {
    .iconsImage {
      height: 90px;
    }

    .midSectionFirstText {
      width: 319px;
    }

    .midSectionSecontText {
      width: 315px;
    }

    .midSectionSecondTitle {
      width: 325px;
      margin: 90px 0 100px 0;
    }

    .midBanner {
      display: none;
    }
  }
`;
