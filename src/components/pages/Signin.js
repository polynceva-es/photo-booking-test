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
  }, []);
  return (
    <div className="flex">
      <h1>Войти в аккаунт</h1>
      <AuthIntegration/>
      <FormAuth child={<></>} buttonTitle={'Войти'}/>
      {/* передать пропсы */}
    </div>
  );
}

export default Signin;
