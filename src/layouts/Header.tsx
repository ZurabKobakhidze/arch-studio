import styled from "styled-components";
import { Hamburger, Logo } from "../svg";
import { Link } from "react-router-dom";
import { Backdrop } from "@/components";

const Header = () => {
  return (
    <HeaderElement>
      <Link to="/">
        <Logo dark={true} />
      </Link>
      <Hamburger />

      <Backdrop>
        <MenuBox>
          <Link to="/Portfolio" style={{textDecoration: "none"}}><Text>Portfolio</Text></Link>
          <Link to="/About" style={{textDecoration: "none"}}><Text>About Us</Text></Link>
          <Link to="/Contact" style={{textDecoration: "none"}}><Text>Contact</Text></Link>
        </MenuBox>
      </Backdrop>
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
   width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 3;
`;

const MenuBox = styled.div`
  padding: 39px 48px 42px 48px;
  background-color: var(--veryLightGrey);
  height: fit-content;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;

const Text = styled.h3`
  color: var(--dark);
  font-family: League Spartan;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
