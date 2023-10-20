import { Container, Typography, Button } from "@mui/material";
import React from "react";
import { COLORS } from "../../../config/colors";
import { HomeHeroSection, HomeHeroContent} from "../home-style";
export const HomeHero = () => {
  return (
    <HomeHeroSection>
      <Container>
        <HomeHeroContent>
          <Typography pb={"14px"} variant="h1">
            НАСТОЯЩИЙ ВКУС ТАБАКА БЕЗ ВРЕДА ДЛЯ ОКРУЖАЮЩИХ
          </Typography>
          <div className="Hero-content">
            <p className="content_text">
              Новая линейка табачных стиков для нагревательных систем IQOS
            </p>
          </div>
          <Button sx={{"&:hover": {backgroundColor: `${COLORS.cattailRed}` }}} variant="main_btn">В КАТАЛОГ</Button>
        </HomeHeroContent>
      </Container>
    </HomeHeroSection>
  );
};
