import { Arrow, Logo } from "@/svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
    return (
      <FooterDiv>
        <Link to="/">
          <LogoBox>
            <Logo dark={false} />
          </LogoBox>
        </Link>
        <FooterMenu>
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <FooterLinkItem>Portfolio</FooterLinkItem>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <FooterLinkItem>About Us</FooterLinkItem>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <FooterLinkItem>Contact</FooterLinkItem>
          </Link>
        </FooterMenu>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <SeePortfolio>
            <Text>See Our Portfolio</Text>
            <Arrow dark={false} />
          </SeePortfolio>
        </Link>
      </FooterDiv>
    );
  };

export default Footer;

const FooterDiv = styled.header`
  background-color: var(--veryLightGrey);
  padding: 0 62px 48px 62px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LogoBox = styled.div`
  padding: 48px 31px;
  background-color: var(--dark);
  width: fit-content;
  margin-top: -60px;
`;

const FooterMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
  margin-top: 33px;
`;

const FooterLinkItem = styled.span`
  color: var(--mediumGrey);
  color: #7d828f;
  font-family: League Spartan;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
`;

const SeePortfolio = styled.div`
  padding: 25px 32px 22px 32px;
  display: flex;
  column-gap: 24px;
  align-items: center;
  background-color: var(--dark);
  margin-top: 31px;
`;

const Text = styled.h3`
  color: #fff;
  text-align: right;
  font-family: League Spartan;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
`;
