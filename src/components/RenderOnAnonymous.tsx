import { ReactElement } from "react";
import { KeyCloakService } from "../security/KeycloakService";

const RenderOnAnonymous = ({ children }: { children: ReactElement }) =>
  !KeyCloakService.isLoggedIn() ? children : null;

export default RenderOnAnonymous;
