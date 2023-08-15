import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logoX from "../../assets/x-logo.png";

export function Header() {
  const [submenuOpenM, setSubmenuOpenM] = useState( false );
  const [submenuOpenL, setSubmenuOpenL] = useState( false );
  const [submenuOpenQ, setSubmenuOpenQ] = useState( false );

  const toggleSubmenuM = () => {
    setSubmenuOpenM( !submenuOpenM );
  };

  const toggleSubmenuL = () => {
    setSubmenuOpenL( !submenuOpenL );
  };

  const toggleSubmenuQ = () => {
    setSubmenuOpenQ( !submenuOpenQ );
  };

  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <div>
          <img src={logoX} alt="Logo da letra X" />
        </div>
      </NavLink>

      <nav>
        <NavLink to="/">
          Início
        </NavLink>

        <div
          className={`submenu ${submenuOpenM ? "open" : ""}`}
          onClick={toggleSubmenuM}
        >
          <span className="submenu-title">
            <a>Mega-sena 🍀<span className={`submenu-arrow ${submenuOpenM ? "open" : ""}`}>▼
            </span></a>
          </span>
          <div className="submenu-content">
            <NavLink to="/mega">Simular 🍀</NavLink>
            <NavLink to="/cartela-mega">Cartela 🍀</NavLink>
          </div>
        </div>

        <div
          className={`submenu ${submenuOpenL ? "open" : ""}`}
          onClick={toggleSubmenuL}
        >
          <span className="submenu-title">
            <a>Lotofácil 🍀<span className={`submenu-arrow ${submenuOpenL ? "open" : ""}`}>▼
            </span></a>
          </span>
          <div className="submenu-content">
            <NavLink to="/loto">Simular 🍀</NavLink>
            <NavLink to="/cartela-loto">Cartela 🍀</NavLink>
          </div>
        </div>

        <div
          className={`submenu ${submenuOpenQ ? "open" : ""}`}
          onClick={toggleSubmenuQ}
        >
          <span className="submenu-title">
            <a>Quina 🍀<span className={`submenu-arrow ${submenuOpenQ ? "open" : ""}`}>▼
            </span></a>
          </span>
          <div className="submenu-content">
            <NavLink to="/quina">Simular 🍀</NavLink>
            <NavLink to="/cartela-quina">Cartela 🍀</NavLink>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  )
}