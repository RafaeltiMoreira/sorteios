import { VscGithubInverted } from "react-icons/vsc";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      Copyright © 2023 | <a href="https://github.com/RafaeltiMoreira" target='_blank'><VscGithubInverted size={11}/> Rafael Moreira. </a> Todos os direitos reservados.
    </FooterContainer>
  )
}
