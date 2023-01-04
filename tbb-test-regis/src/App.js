import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NavBar />
      <ProductList />
      <ArticleList />
      <Footer />
    </>
  );
}

export default App;
