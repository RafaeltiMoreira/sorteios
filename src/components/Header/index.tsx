import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logoX from "../../assets/x-logo.png";

export function Header() {
  const [submenus, setSubmenus] = useState( [
    { open: false },
    { open: false },
    { open: false },
  ] );

  const toggleSubmenu = ( index: number ) => {
    const updatedSubmenus = submenus.map( ( submenu, i ) => {
      if ( i === index ) {
        return { open: !submenu.open };
      }
      return { open: false };
    } );
    setSubmenus( updatedSubmenus );
  };

  return (
    <HeaderContainer>
      <nav>
        <NavLink style={{ borderColor: "transparent" }} to="/" title="Início">
          <div>
            <img src={logoX} alt="Logo da letra X" />
          </div>
        </NavLink>

        <NavLink to="/">Início</NavLink>

        {submenus.map( ( submenu, index ) => (
          <div
            key={index}
            className={`submenu ${submenu.open ? "open" : ""}`}
            onClick={() => toggleSubmenu( index )}
          >
            <span className="submenu-title">
              <a>
                {index === 0 && "Mega"}
                {index === 1 && "Lotofácil"}
                {index === 2 && "Quina"}
                <span className={`submenu-arrow ${submenu.open ? "open" : ""}`}>
                  ▼
                </span>
              </a>
            </span>
            <div className="submenu-content">
              <NavLink to={`/${index === 0 ? "mega" : index === 1 ? "loto" : "quina"}`}>
                Simular
              </NavLink>
              <NavLink to={`/cartela-${index === 0 ? "mega" : index === 1 ? "loto" : "quina"}`}>
                Cartela
              </NavLink>
            </div>
          </div>
        ) )}
      </nav>
    </HeaderContainer>
  );
}