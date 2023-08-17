import React from "react";
import AuthIntegration from "../AuthIntegration";
import FormAuth from "../FormAuth";

function Signup() {
  const title = `Присоединиться как ${false ? "заказчик" : "специалист"}`;
  return (
    <>
      <h1>{title}</h1>
      <AuthIntegration/>
      <FormAuth
        child={
          <>
            <label>
              Имя<input></input>
            </label>
            <label>
              Фамилия<input></input>
            </label>
          </>
        }
      />
    </>
  );
}

export default Signup;
