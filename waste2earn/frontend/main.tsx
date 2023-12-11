
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css"
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";

const init = async () => {
  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient);
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => {
        handleAuthenticated(authClient);
      },
    });
  }
};

async function handleAuthenticated(authClient: AuthClient) {
  const identity = authClient.getIdentity();
  const userPrincipal = identity.getPrincipal.toString();
  console.log(userPrincipal);
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}

init();

