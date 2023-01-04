import articleImg1 from "../../assets/images/article-image.png";
import articleImg2 from "../../assets/images/article-image2.png";
import articleImg3 from "../../assets/images/article-image3.png";
import CardArticle from "../CardArticle";
import { Container, Content } from "./styles";

const articleListMockup = [
  {
    img: articleImg1,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    img: articleImg2,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    img: articleImg3,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

function ArticleList() {
  return (
    <>
      <Container>
        <Content>
          <h2>Keep up to date with our discoveries</h2>
          <ul>
            {articleListMockup.map((article, index) => (
              <CardArticle
                key={index}
                img={article.img}
                description={article.description}
              />
            ))}
          </ul>
          <button>see more</button>
        </Content>
      </Container>
    </>
  );
}

export default ArticleList;
