import React from "react";
import "../components/FormAuth.css";

function FormAuth(props) {
  const { child } = props;

  // const [isClient, setIsClient] = React.useState("true");
  // const [isExpert, setIsExpert] = React.useState("false");

    return (
    <>
        <form className="form-auth">
          {child}
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
          Присоединиться
        </button>
      </form>
    </>
  );
}

export default FormAuth;
