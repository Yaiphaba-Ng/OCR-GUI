import Keycloak from "keycloak-js";

const keycloak = new Keycloak("/keycloak.json");

const initKeycloak = (onAuthenticatedCallback: () => void) => {
  keycloak
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
      pkceMethod: 'S256',
    })
    .then((authenticated) => {

      console.log({
        'authenticated....': authenticated,
      });

      onAuthenticatedCallback();
    })
    .catch((error) => {
      console.error(`Keycloak initialization failed: ${error}`);
    });
};

const doLogin = () => keycloak.login();

const doLogout = () => keycloak.logout();

const isLoggedIn = () => !!keycloak.token;

const getToken = () => keycloak.token;

const updateToken = (successCallback: () => void) => {
  keycloak.updateToken(5).then(successCallback).catch(doLogin);
};

const getUserName = () => keycloak.tokenParsed?.preferred_username;

export const KeyCloakService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUserName,
};
