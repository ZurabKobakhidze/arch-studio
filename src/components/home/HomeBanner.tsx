import { ParamourMobile } from "@/assets";
import { Arrow } from "@/svg";
import styled from "styled-components";

type PropsType = {
    title: string;
    buttonText: string;
    to: string;
    images: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    description?: string;
  };

const HomeBanner: React.FC<PropsType>  = () => {
  return (
    <Wrapper>
      <TextsBox>
        <BannerTitle>Project Paramour</BannerTitle>
        <BannerDescription>
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </BannerDescription>
        <ButtonBox> <Text>See Our Portfolio</Text>
            <Arrow dark={false} /></ButtonBox>
      </TextsBox>
    </Wrapper>
  );
};

export default HomeBanner;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-image: url(${ParamourMobile});
  background-repeat: no-repeat;
`;

const TextsBox = styled.div`
  width: 100%;
  padding: 116px 32px 110px 32px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const BannerTitle = styled.h2`
  color: #fff;
  font-family: League Spartan;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.2px;
`;

const BannerDescription = styled.h3`
  color: #fff;
  font-family: League Spartan;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 311px;
  margin-top: 11px;
`;

const ButtonBox = styled.div`
    padding: 25px 32px 22px 32px;
  display: flex;
  column-gap: 24px;
  align-items: center;
  background-color: var(--dark);
  margin-top: 83px;
  border: none;
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

