import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { KeyCloakService } from "./security/KeycloakService.ts";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D5E2D5",
    },
    secondary: {
      main: "#B7CDB7",
    },
  },
  typography: {
    fontFamily: "Poppins",
    allVariants: {
      color: "#0B0F0B",
    },
  },
});
const render = () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
};

KeyCloakService.initKeycloak(render);
