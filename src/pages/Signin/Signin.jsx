import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Signin.css';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import useValidation from '../../hooks/useValidation';

export const Signin = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { onSubmit, signinGoogle, signinVk } = props;
  const { values, errors, onChange, resetValidation, isFormValid } =
  useValidation();

  React.useEffect(()=> {
    resetValidation({email: '', password: ''});
    // signinGoogle(new URLSearchParams(location.hash).get("access_token"));
    // signinVk(new URLSearchParams(location.search).get("code"));
  },[])

  const handleSubmitSignin = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
    <div className={'loginPage-container'}>
      <h1>Войти в аккаунт</h1>
      <AuthIntegration />
      <FormAuth
        child={<>
        <label
          htmlFor="reg-email"
          className=""
        >
          Email
          <input
            className=""
            id="reg-email"
            name="email"
            type="email"
            onChange={onChange}
            value={values.email || ''}
          />
          <span className="">{errors.email || ''}</span>
        </label>
        <label
          htmlFor="reg-pass"
          className=""
        >
          Пароль
          <input
            className=""
            id="reg-pass"
            name="password"
            type="password"
            onChange={onChange}
            value={values.password || ''}
            required
          />
          <span className="">{errors.password || ''}</span>
        </label>
        </>}
        buttonTitle={'Войти'}
        onSubmit={handleSubmitSignin}
        isFormValid={isFormValid}
      />
      {/* передать пропсы */}
      <button onClick={() => navigate('/reset-password')}>Забыли пароль?</button>
      <button onClick={() => navigate('/sign-up')}>Регистрация</button>
    </div>
  );
};
