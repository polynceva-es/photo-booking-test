import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import useValidation from '../../hooks/useValidation';

export const Signup = (props) => {
  const navigate = useNavigate();
  const { onSubmit } = props;
  const { values, errors, onChange, resetValidation, isFormValid } = useValidation();

  React.useEffect(() => {
    resetValidation({ name: '', surname: '', email: '', password: '' });
  }, []);

  const title = `Присоединиться как ${true ? 'заказчик' : 'специалист'}`;

  const handleSubmitSignup = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
    <div className="">
      <h1>{title}</h1>
      <AuthIntegration />
      <FormAuth
        child={
          <>
            <label
              htmlFor="reg-name"
              className=""
            >
              Имя
              <input
                className=""
                id="reg-name"
                name="name"
                type="text"
                onChange={onChange}
                value={values.name || ''}
                minLength="2"
                maxLength="30"
                required
              />
              <span className="">{errors.name || ''}</span>
            </label>
            <label
              htmlFor="reg-surname"
              className=""
            >
              Фамилия
              <input
                className=""
                id="reg-surname"
                name="surname"
                type="text"
                onChange={onChange}
                value={values.surname || ''}
                minLength="2"
                maxLength="30"
                required
              />
              <span className="">{errors.surname || ''}</span>
            </label>
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
          </>
        }
        buttonTitle={'Присоединиться'}
        onSubmit={handleSubmitSignup}
        isFormValid={isFormValid}
      />

      <button onClick={() => navigate('/sign-in')}>Войти</button>
    </div>
  );
};
