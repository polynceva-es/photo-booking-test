import React, {useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Signin.css';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';
import { FormAuth } from '../../components/FormAuth/FormAuth';

export const Signin = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { onSubmit, signinGoogle, signinVk } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({mode: 'onChange'});


  useEffect(()=> {
    // signinGoogle(new URLSearchParams(location.hash).get("access_token"));
    // signinVk(new URLSearchParams(location.search).get("code"));
  },[])

  const handleSubmitSignin = (data) => {
    // onSubmit(data);
    console.log(data);

    reset();
  }

  console.log(errors);
  return (
    <div className="signin">
      <h1>Войти в аккаунт</h1>
      <AuthIntegration />
      <FormAuth
        child={<>
        <label
          htmlFor="reg-email"
          className="form-auth__label"
        >
          Email
          <input
            className=""
            type="email"
            {...register("email", {
              required: "Email is require field!",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Please enter valid email'
              }
            })}
          />
           <span className="form-auth__err">{errors?.email && errors.email.message}</span>
        </label>
        <label
          htmlFor="reg-pass"
          className="form-auth__label"
        >
          Пароль
          <input
            className=""
            type="password"
            {...register("password", {
              required: "Password is require field!",
              // pattern: {
              //   value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
              //   message: 'Please enter valid password'
              // }
            })}
          />
         <span className="form-auth__err">{errors?.password && errors.password.message}</span>
        </label>
        </>}
        buttonTitle={'Войти'}
        onSubmit={handleSubmit(handleSubmitSignin)}
        // isFormValid={isValid}
        err={errors}
      />
      <button onClick={() => navigate('/reset-password')}>Забыли пароль?</button>
      <button onClick={() => navigate('/sign-up')}>Регистрация</button>
    </div>
  );
};
