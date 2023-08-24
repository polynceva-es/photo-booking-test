import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import useValidation from '../../hooks/useValidation';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import ok_image from '../../images/Ok.svg';

export const ResetPassword = props => {
  const navigate = useNavigate();
  const { onChange, values, errors, resetValidation, isFormValid } = useValidation();
  const { isEmailSend, isPasswordReset, onSubmitResetPassword, onSubmitSendEmailToResetPassword } = props;

  useEffect(() => {
    resetValidation({ email: '', password: '' });
  }, []);

  const handleSubmitSendEmailToResetPassword = evt => {
    evt.preventDefault();
    onSubmitSendEmailToResetPassword(values);
  };

  const handleSubmitResetPassword = evt => {
    evt.preventDefault();
    onSubmitResetPassword(values);
  };

  if (!isEmailSend) {
    return (
      <div className={'resetPassword-container'}>
        <h1>Сброс пароля</h1>
        <h2>Введите email и мы отправим вам ссылку для сброса пароля</h2>
        <FormAuth
          child={
            <>
              <label
                htmlFor="sendEmail"
                className=""
              >
                Email
                <input
                  className=""
                  id="sendEmail"
                  name="sendEmail"
                  type="email"
                  onChange={onChange}
                  value={values.sendEmail || ''}
                  required
                />
                <span className="">{errors.sendEmail || ''}</span>
              </label>
            </>
          }
          buttonTitle={'Отправить письмо'}
          onSubmit={handleSubmitSendEmailToResetPassword}
          isFormValid={isFormValid}
        />
        <button onClick={() => navigate('/sign-in')}>Вернуться назад</button>
      </div>
    );
  } else if (isEmailSend) {
    return (
      <div className={'resetPassword-container'}>
        <img
          src={ok_image}
          alt="ok"
        />
        <h1>Письмо отправлено</h1>
        <p>
          Проверьте свой email и&nbsp;перейдите по&nbsp;ссылке в&nbsp;письме, чтобы продолжить сброс
          пароля
        </p>
      </div>
    );
  } else if (!isPasswordReset) {
    return (
      <div className={'resetPassword-container'}>
        <h1>Сброс пароля</h1>
        <FormAuth
          child={
            <>
              <label
                htmlFor="resetPassword"
                className=""
              >
                Новый пароль
                <input
                  className=""
                  id="resetPassword"
                  name="resetPassword"
                  type="password"
                  onChange={onChange}
                  value={values.resetPassword || ''}
                  required
                />
                <span className="">{errors.resetPassword || ''}</span>
              </label>
            </>
          }
          buttonTitle={'Сбросить пароль'}
          onSubmit={handleSubmitResetPassword}
          isFormValid={isFormValid}
        />
      </div>
    )
  }
};
