import React from "react";
import { Stack } from "@mui/system";
import { HeaderNav, HeaderNavLink } from "../style";
import Burger from "../../../assets/img/burger.svg";
export const Navbar = () => {
  return (
    <HeaderNav>
      <Stack direction={"row"} justifyContent="space-between">
        <HeaderNavLink>Сигареты</HeaderNavLink>
        <HeaderNavLink>Одноразки</HeaderNavLink>
        <HeaderNavLink>Iqos, glo</HeaderNavLink>
        <HeaderNavLink>Pod-системы</HeaderNavLink>
        <HeaderNavLink>Жидкости</HeaderNavLink>
        <HeaderNavLink>Катриджи</HeaderNavLink>
        <HeaderNavLink>Кальянный табак</HeaderNavLink>
        <HeaderNavLink>Bce для кальяна</HeaderNavLink>
        <HeaderNavLink>Аксессуары</HeaderNavLink>
        <button>
          <img src={Burger} alt="burger icon" />
        </button>
        <HeaderNavLink>O компании</HeaderNavLink>
      </Stack>
    </HeaderNav>
  );
};
