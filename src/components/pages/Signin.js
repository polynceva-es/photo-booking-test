import React from "react";
import "../pages/Signin.css";
import { useLocation } from "react-router-dom";
import FormAuth from "../FormAuth";
import AuthIntegration from "../AuthIntegration";
import useValidation from "../../hooks/useValidation";

function Signin() {
  const location = useLocation();
  const { values, errors, onChange, resetValidation, isFormValid } =
    useValidation();

  React.useEffect(() => {
    console.log(new URLSearchParams(location.hash).get("access_token"));
    console.log(new URLSearchParams(location.search).get("code"));
    resetValidation({ email: "", password: "" });
  }, []);
  return (
    <div className="flex">
      <h1>Войти в аккаунт</h1>
      <AuthIntegration />
      <FormAuth
        child={
          <>
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
          </>
        }
        buttonTitle={"Войти"}
        isFormValid={isFormValid}
      />
      {/* передать пропсы */}
    </div>
  );
}

export default Signin;
