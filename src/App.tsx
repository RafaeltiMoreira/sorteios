import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { HashRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
