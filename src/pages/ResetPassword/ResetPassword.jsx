import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import useValidation from '../../hooks/useValidation';
import { FormAuth } from '../../components/FormAuth/FormAuth';
import React from 'react';

export const ResetPassword = (props) => {
  const navigate = useNavigate();
  const {onChange, values, errors, resetValidation, isFormValid} = useValidation();
  const {onSubmit} = props;
  React.useEffect(()=> {
    resetValidation({email: ''});
  }, []);

  const handleSubmitResetPassword = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
    <div className={'resetPassword-container'}>
      <h1>Сброс пароля</h1>
      <h2>Введите email и мы отправим вам ссылку для сброса пароля</h2>
      <FormAuth
      child={<>
      <label
          htmlFor="reset"
          className=""
        >
          Пароль
          <input
            className=""
            id="reset"
            name="reset"
            type="email"
            onChange={onChange}
            value={values.reset || ''}
            required
          />
          <span className="">{errors.reset || ''}</span>
        </label>
        </>}
        buttonTitle={'Отправить письмо'}
        onSubmit={handleSubmitResetPassword}
        isFormValid={isFormValid}
      />      
      <button onClick={() => navigate('/sign-in')}>Вернуться назад</button>
    </div>
  );
};
