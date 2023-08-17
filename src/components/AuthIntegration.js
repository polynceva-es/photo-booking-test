import React from "react";
import LinkSignIn from "../components/Link_signin";
import google_logo from "../images/logo googleg 48dp.svg";
import vk_logo from "../images/VK.svg";

function AuthIntegration() {
  const client_id_google =
    "204867274206-mb14mer9t4sqiisg2v4rh8vsckefpr4m.apps.googleusercontent.com";
  const client_id_vk = "51727959";
  const redirect_uri = "http://localhost:3000/sign-in";
  return (
    <>
      <LinkSignIn
        url={`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${redirect_uri}&client_id=${client_id_google}`}
        logo={google_logo}
        title="Войти через Google"
      />

      <LinkSignIn
        url={`https://oauth.vk.com/authorize?client_id=${client_id_vk}&display=page&redirect_uri=http://localhost:3000/sign-in&scope=email&response_type=code&v=5.131`}
        logo={vk_logo}
        title="Войти через VK"
      />
    </>
  );
}

export default AuthIntegration;