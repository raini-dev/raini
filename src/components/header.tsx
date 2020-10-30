import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Color } from "../constants";
import { ExternalRoute } from "../routes";

const Nav = styled.nav`
  position: absolute;
  top: -100vh;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to top, #fefbfa, #fbf8f7 90%);
  transition: top 0.2s ease-in;
  box-shadow: 0 5px 25px ${Color.DARK_PINK_SHADOW};
  margin-top: 0;

  &.is-active {
    top: 0;
  }

  @media screen and (min-width: 1281px) {
    top: 0;
    background: transparent;
    position: relative;
    box-shadow: none;
    align-items: flex-end;
    padding-left: 5rem;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-left: 0;
  padding: 2rem 2rem 2rem 0;

  @media screen and (min-width: 1281px) {
    flex-direction: row;
    padding: 0;
    align-self: flex-start;
  }
`;

const NavLi = styled.li`
  padding: 2rem;
`;

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  padding: 2rem;
  margin: 0;
  text-decoration: none;

  &.current-page {
    color: ${Color.DARKER_PINK};
  }

  @media screen and (min-width: 1281px) {
    font-size: 1rem;
    padding: 16px;
  }
`;

interface INavigationProps {
  isActive: boolean;
}

const Navigation: FC<INavigationProps> = ({ isActive }) => (
  <Nav className={isActive ? "is-active" : ""}>
    <NavUl>
      <NavLi>
        <NavLink to={ExternalRoute.DISCORD} activeClassName="current-page">
          Discord
        </NavLink>
      </NavLi>

      <NavLi>
        <NavLink to={ExternalRoute.GITHUB} activeClassName="current-page">
          GitHub
        </NavLink>
      </NavLi>
    </NavUl>
  </Nav>
);

interface IBurgerProps extends INavigationProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Burger: FC<IBurgerProps> = ({ setActive, isActive }) => (
  <button
    onClick={() => setActive(!isActive)}
    aria-label="Menu"
    aria-controls="navigation"
    aria-expanded="false"
    className={`hamburger hamburger--spring ${isActive ? "is-active" : ""}`}
    type="button"
    css={css`
      @media screen and (min-width: 1281px) {
        visibility: hidden;
        display: none;
      }
    `}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </button>
);

const Logo = () => (
  <Link to="/">
    <img css={{ verticalAlign: "bottom" }} src="/logo.svg" height="40" alt="Raini.dev logo" />
  </Link>
);

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  display: flex;
  padding: 2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 658px) {
    padding: 1rem 5%;
  }

  @media screen and (min-width: 1281px) {
    padding: 1rem 15%;
  }
`;

const Header: FC = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <StyledHeader>
      <Logo />

      <Navigation isActive={isMenuActive} />
      <Burger isActive={isMenuActive} setActive={setMenuActive} />
    </StyledHeader>
  );
};

export default Header;
