import styled from "styled-components";
import { Hamburger, Logo } from "../svg";

const Header = () =>{
return <HeaderElement>
    <Logo />
    <Hamburger />
</HeaderElement>
}

export default Header;

const HeaderElement = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
`;