import "../components/Link_signin.css";
import React from "react";
import { Link } from "react-router-dom";

function LinkSignIn(props) {
  const { url, logo, title } = props;
  return (
    <Link className="link-signin" to={url} target="_blank">
      <img className="link-signin__logo" src={logo} alt="logo" />
      <p className="link-signin__title">{title}</p>
    </Link>
  );
}

export default LinkSignIn;
