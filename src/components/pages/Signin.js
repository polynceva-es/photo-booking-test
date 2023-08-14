import React from "react";
import "../pages/Signin.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function sharePostInVk(url) {
  return `https://vk.com/share.php?url=${url}?title='Title'`
}

function Signin() {
  const location = useLocation();
  const baseUrl='http://localhost:3000';
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

      <button
        onClick={(evt) => {
          evt.preventDefault();
          console.log("click google");
        }}
      >
        Register with Google
      </button>

      <button
        onClick={(evt) => {
          evt.preventDefault();
          console.log("click vk");
        }}
      >
        Register with Vk
      </button>

      <Link
        to={sharePostInVk(`${baseUrl}${location.pathname}`)}
        target="_blank"
      >
        Share post in VK
      </Link>
    </div>
  );
}

export default Signin;
