import React from "react";
import "../pages/Signin.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import FormAuth from "../FormAuth";
import AuthIntegration from "../AuthIntegration";


// import vk_logo_share from "../../images/icomoon-free_vk.svg";
// import telegram_logo from "../../images/logos_telegram.svg";
// import SharePopup from "../SharePopup";

// function sharePostInVk(url) {
//   return `https://vk.com/share.php?url=${url}?title='Title'`;
// }

// function shareInTelegram(url) {
//   return `https://telegram.me/share/url?url=${url}&text=ТЕКСТ`;
// }

function Signin() {
  const location = useLocation();
  // const baseUrl = "http://localhost:3000";

  React.useEffect(() => {
    console.log(new URLSearchParams(location.hash).get("access_token"));
    console.log(new URLSearchParams(location.search).get("code"));
  }, []);
  return (
    <div className="flex">
      {/* <SharePopup
        url={`${baseUrl}${location.pathname}`}
        links={
          <>
            <Link
              to={sharePostInVk(`${baseUrl}${location.pathname}`)}
              target="_blank"
            >
              <img src={vk_logo_share} alt="google sign-in" />
            </Link>

            <Link
              to={shareInTelegram(`${baseUrl}${location.pathname}`)}
              target="_blank"
            >
              <img src={telegram_logo} alt="google sign-in" />
            </Link>
          </>
        }
      /> */}
      <h1>Войти в аккаунт</h1>
      <AuthIntegration/>
      <FormAuth child={<></>} buttonTitle={'Войти'}/>
      {/* передать пропсы */}
    </div>
  );
}

export default Signin;
