import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './Signup.css';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import useValidation from '../../hooks/useValidation';

export const Signup = props => {
  const {
    onSubmit,
    onSubmitJoin,
    isClient
  } = props;
  const { values, errors, onChange, resetValidation, isFormValid } = useValidation();
  const title = `Присоединиться как ${isClient ? 'заказчик' : 'специалист'}`;

  const handleSubmitSignup = evt => {
    evt.preventDefault();
    onSubmit(values, isClient);
  };

  const handleSubmitJoin = evt => {
    evt.preventDefault();
    onSubmitJoin(values);
  };

  useEffect(() => {
    resetValidation({ name: '', surname: '', email: '', password: '',client: '', expert: '', type: '' });
  }, []);

  if (isClient !== undefined) {
    return (
      <div className="signup">
        <h1>{title}</h1>
        <AuthIntegration />
        <FormAuth
          child={
            <>
              <label
                htmlFor="reg-name"
                className="form-auth__label"
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
                <span className="form-auth__err">{errors.name || ''}</span>
              </label>
              <label
                htmlFor="reg-surname"
                className="form-auth__label"
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
                <span className="form-auth__err">{errors.surname || ''}</span>
              </label>
              <label
                htmlFor="reg-email"
                className="form-auth__label"
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
                <span className="form-auth__err">{errors.email || ''}</span>
              </label>
              <label
                htmlFor="reg-pass"
                className="form-auth__label"
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
                <span className="form-auth__err">{errors.password || ''}</span>
              </label>
            </>
          }
          buttonTitle={'Присоединиться'}
          onSubmit={handleSubmitSignup}
          isFormValid={isFormValid}
        />
      </div>
    );
  } else {
    return (
      <FormAuth
        child={
          <fieldset className="signup__fieldset">
            <legend className="signup__title">
              Присоединитесь
              <br />
              как заказчик или специалист
            </legend>

            <div className="signup__input-container">
              <input
                type="radio"
                id="client"
                name="type"
                value="client"
                onChange={onChange}
                className="signup__input-radio"
                required
              />
              <label
                htmlFor="client"
                className="signup__input-label"
              >
                Я заказчик
              </label>
            </div>

            <div className="signup__input-container">
              <input
                type="radio"
                id="expert"
                name="type"
                value="expert"
                onChange={onChange}
                className="signup__input-radio"
              />
              <label
                htmlFor="expert"
                className="signup__input-label"
              >
                Я фотограф/видеооператор
              </label>
            </div>
          </fieldset>
        }
        buttonTitle={'Присоединиться'}
        onSubmit={handleSubmitJoin}
        isFormValid={isFormValid}
      />
    );
  }
};
