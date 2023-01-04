import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NavBar />
      <ProductList />
      <ArticleList />
    </>
  );
}

export default App;
