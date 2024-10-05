import { ReactElement } from "react";
import { Navigate } from "react-router";
import { KeyCloakService } from "../security/KeycloakService";

const RenderOnAuthenticated = ({ children }: { children: ReactElement }) => {
  const isLoggedIn = KeyCloakService.isLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RenderOnAuthenticated;
