import { Container } from "./styles";

function CardProduct({ img, text, type }) {
  return (
    <>
      <Container>
        <img src={img} alt="" />
        <p>{text}</p>
        <button className={type}>{type}</button>
      </Container>
    </>
  );
}

export default CardProduct;
