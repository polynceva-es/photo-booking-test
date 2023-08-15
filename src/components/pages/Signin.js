import React from "react";
import "../pages/Signin.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import google_logo from "../../images/icons8-google.svg";
import vk_logo from "../../images/icons8-vk.svg";
import telegram_logo from "../../images/icons8-telegram-app.svg";

function sharePostInVk(url) {
  return `https://vk.com/share.php?url=${url}?title='Title'`;
}

function shareInTelegram(url) {
  return `https://telegram.me/share/url?url=${url}&text=ТЕКСТ`;
}

function Signin() {
  const location = useLocation();
  const baseUrl = "http://localhost:3000";
  const client_id_google =
    "204867274206-mb14mer9t4sqiisg2v4rh8vsckefpr4m.apps.googleusercontent.com";
  const client_id_vk = "51727959";
  const redirect_uri = "http://localhost:3000/sign-in";
  React.useEffect(() => {
    console.log(new URLSearchParams(location.hash).get("access_token"));
    console.log(new URLSearchParams(location.search).get("code"));
  }, []);
  return (
    <div className="flex">
      <h1>Регистрация</h1>
      <form className="flex">
        <label>
          Email<input></input>
        </label>
        <label>
          Password<input></input>
        </label>
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            console.log("click register");
          }}
        >
          Register
        </button>
      </form>
      <h1>Войти с помощью...</h1>
      <Link
        to={`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${redirect_uri}&client_id=${client_id_google}`}
      >
        <p>Sign in Google</p>
        <img src={google_logo} alt="google sign-in" />
      </Link>

      <Link
        to={`https://oauth.vk.com/authorize?client_id=${client_id_vk}&display=page&redirect_uri=http://localhost:3000/sign-in&scope=email&response_type=code&v=5.131`}
      >
        <p>Sign in Vk</p>
        <img src={vk_logo} alt="google sign-in" />
      </Link>

      <Link
        to={sharePostInVk(`${baseUrl}${location.pathname}`)}
        target="_blank"
      >
        Share post in VK
        <img src={vk_logo} alt="google sign-in" />
      </Link>

      <Link
        to={shareInTelegram(`${baseUrl}${location.pathname}`)}
        target="_blank"
      >
        Share in Telegram
        <img src={telegram_logo} alt="google sign-in" />
      </Link>
    </div>
  );
}

export default Signin;
