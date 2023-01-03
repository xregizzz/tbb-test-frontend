import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NavBar />
      <ProductList />
    </>
  );
}

export default App;
