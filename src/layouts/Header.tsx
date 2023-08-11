import styled from "styled-components";
import { Hamburger, Logo } from "../svg";
import { Link } from "react-router-dom";

const Header = () =>{
return <HeaderElement>
    <Link to="/"><Logo dark={true} /></Link>
    
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