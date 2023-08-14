import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logoX from "../../assets/x-logo.png";

export function Header() {

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

        <NavLink to="/mega">
          Mega sena
        </NavLink>

        <NavLink to="/loto">
          Lotofácil
        </NavLink>

        <NavLink to="/quina">
          Quina
        </NavLink>

        <NavLink to="/cartela">
          Cartela
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}