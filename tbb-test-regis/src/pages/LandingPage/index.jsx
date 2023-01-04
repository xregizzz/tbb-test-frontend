import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ProductList from "../../components/ProductList";
import ArticleList from "../../components/ArticleList";
import Footer from "../../components/Footer";
import MainBanner from "../../assets/images/banner.png";
import { Container } from "./styles";
import IconsImage from "../../assets/images/icons.png";
import MidBanner from "../../assets/images/banner-mid.png";

function LandingPage() {
  return (
    <>
      <Container>
        <header>
          <Header />
          <NavBar />
        </header>
        <main>
          <img
            className="mainBanner"
            src={MainBanner}
            alt="Main Banner, products and happy people"
          />
          <section className="midSection">
            <h2 className="midSectionTitle">we're here to help</h2>
            <p className="midSectionFirstText">
              When it comes to caring for our most intimate areas, we've lost
              our connection. <br /> <br /> Embarrassed, unwilling, or unable to
              communicate with others, we're needlessly neglecting the parts of
              our bodies that need it most. <br /> <br /> We're here to help.
              Providing you with the expertise, knowledge and products you need
              to feel confident in your personal care.
            </p>
            <img
              className="iconsImage"
              src={IconsImage}
              alt="Promote, Preserve, Protect Icons"
            />
            <h2 className="midSectionSecondTitle">
              whatever your age. whatever your lifestyle. whatever your
              interests.
            </h2>
            <p className="midSectionSecontText">
              Co-created with gynaecologists, our revolutionary products have
              been expertly developed to support your intimate microbiome and pH
              balance, and strengthen overall natural health. <br /> <br /> As
              the experts in intimate hygiene, we want to bring discussion about
              intimate wellness care out of the dark and demystify the taboos
              that surround it.
            </p>
          </section>
          <section>
            <ProductList />
            <img
              className="midBanner"
              src={MidBanner}
              alt="Initbiome products"
            />
            <ArticleList />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
}

export default LandingPage;
