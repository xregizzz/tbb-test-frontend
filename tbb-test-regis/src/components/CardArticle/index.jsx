import { Container } from "./styles";

function CardArticle({ img, description }) {
  return (
    <>
      <Container>
        <img src={img} alt="Article description"></img>
        <p>{description}</p>
      </Container>
    </>
  );
}

export default CardArticle;
