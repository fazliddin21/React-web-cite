import { COLORS } from "../../config/colors";
import styled from "styled-components";
import HeroImg from "../../assets/img/hero-bg.png";
export const HomeHeroSection = styled.section`
  background-image: url(${HeroImg});
  height: 641px;
  background-size: 1922px 641px;
  background-repeat: no-repeat;
`;
export const HomeHeroContent = styled.div`
  max-width: 662px;
  width: 100%;
  padding: 173px 0 196px;
  .Hero-content {
    width: 398px;
  }
  .content_text {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    opacity: 0.5;
    padding-bottom: 27px;
  }
`;
