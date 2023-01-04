import { Container } from "./styles";
import headerLogo from "../../assets/images/header-logo.png";
import { SearchIcon } from "../../assets/icons/search-icon";

function Header() {
  return (
    <>
      <Container>
        <div className="headerLogo">
          <img src={headerLogo} alt="Header Logo" />
        </div>
        <div className="searchLogo">
          <SearchIcon />
        </div>
      </Container>
    </>
  );
}

export default Header;
