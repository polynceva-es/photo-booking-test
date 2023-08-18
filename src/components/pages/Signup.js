import React from "react";
import "../pages/Signup.css";
import AuthIntegration from "../AuthIntegration";
import FormAuth from "../FormAuth";
import useValidation from "../../hooks/useValidation";

function Signup() {
  const { values, errors, onChange, resetValidation, isFormValid } =
  useValidation();
  const title = `Присоединиться как ${true ? "заказчик" : "специалист"}`;
  return (
    <div className="flex">
      <h1>{title}</h1>
      <AuthIntegration/>
      <FormAuth
        child={
          <>
            <label htmlFor="reg-name" className="">
              Имя
              <input
                className=""
                id="reg-name"
                name="name"
                type="text"
                onChange={onChange}
                value={values.name || ""}
                minLength="2"
                maxLength="30"
                required
              />
              <span className="">{errors.name || ""}</span>
            </label>
            <label htmlFor="reg-surname" className="">
              Фамилия
              <input
                className=""
                id="reg-surname"
                name="surname"
                type="text"
                onChange={onChange}
                value={values.surname || ""}
                minLength="2"
                maxLength="30"
                required
              />
              <span className="">{errors.surname || ""}</span>
            </label>
          </>
        }
        buttonTitle={'Присоединиться'}
      />
    </div>
  );
}

export default Signup;
