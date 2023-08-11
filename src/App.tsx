import styled from "styled-components";
import { Footer, Header } from "./layouts";
import Routing from "./Routing";


function App() {
  return (
    <Main>
      <Wrapper>
        <Header />
        <Routing />
      </Wrapper>
      <Footer />
    </Main>
  );
}

export default App;

const Main = styled.main`
  background: #fff;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div``;
