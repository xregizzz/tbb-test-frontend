import { Container, Content } from "./styles";
import greenPack from "../../assets/images/green-pack.png";
import bluePack from "../../assets/images/blue-pack.png";
import pinkPack from "../../assets/images/pink-pack.png";
import CardProduct from "../CardProduct";

const productListMockup = [
  {
    img: bluePack,
    text: "intibiome wellness daily intimate wash",
    type: "wellness",
  },

  {
    img: greenPack,
    text: "intibiome active extra protection intimate wash",
    type: "active",
  },

  {
    img: pinkPack,
    text: "intibiome agecare dryness relief intimate wash",
    type: "agecare",
  },
];

function ProductList() {
  return (
    <>
      <Container>
        <Content>
          <h2>our products</h2>
          <ul>
            {productListMockup.map((product, index) => (
              <CardProduct
                key={index}
                img={product.img}
                text={product.text}
                type={product.type}
              />
            ))}
          </ul>
        </Content>
      </Container>
    </>
  );
}

export default ProductList;
