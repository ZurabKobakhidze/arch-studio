import styled from "styled-components";

const Hamburger = () => {
  return (
    <Svg>
      <g fill="#1B1D23" fill-rule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </Svg>
  );
};

export default Hamburger;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 24px;
  height: 17px;
  cursor: pointer;
`;
