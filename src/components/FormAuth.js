import React from "react";
import "../components/FormAuth.css";

function FormAuth(props) {
  const { child, buttonTitle, onSubmit, onChange, values, errors, isFormValid } = props;

  // const [isClient, setIsClient] = React.useState("true");
  // const [isExpert, setIsExpert] = React.useState("false");

    return (
    <>
        <form className="form-auth" onSubmit={onSubmit} action="#">
          {child}
        <label htmlFor="reg-email" className="">
          Email
          <input
            className=""
            id="reg-email"
            name="email"
            type="email"
            onChange={onChange}
            value={values.email || ""}
          />
          <span className="">{errors.email || ""}</span>
        </label>
        <label htmlFor="reg-pass" className="">
              Пароль
              <input
                className=""
                id="reg-pass"
                name="password"
                type="password"
                onChange={onChange}
                value={values.password || ""}
                required
              />
              <span className="">{errors.password || ""}</span>
            </label>
        <button
          className=""
          type="submit"
          disabled={!isFormValid}
        >
          {buttonTitle}
        </button>
      </form>
    </>
  );
}

export default FormAuth;
