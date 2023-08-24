import React, { useEffect } from 'react';

import './Signup.css';
import { AuthIntegration } from '../../components/AuthIntegration/AuthIntegration';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import useValidation from '../../hooks/useValidation';

export const Signup = props => {
  const { onSubmit, onSubmitJoin, isClient } = props;
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
