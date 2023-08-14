import React from "react";
import "../pages/Signin.css";

function Signin() {
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
      <button
        onClick={(evt) => {
          evt.preventDefault();
          console.log("click vk send post");
        }}
      >
        Vk send post
      </button>
    </div>
  );
}

export default Signin;
