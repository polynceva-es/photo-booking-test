import './FormAuth.css';
import { useNavigate } from 'react-router-dom';

export const FormAuth = props => {
  const { child, buttonTitle, onSubmit, isFormValid } = props;
  const navigate = useNavigate();

  return (
    <>
      <form
        className="form-auth"
        onSubmit={onSubmit}
        action="#"
      >
        {child}
        <button
          className="form-auth__button_submit"
          type="submit"
          disabled={!isFormValid}
        >
          {buttonTitle}
        </button>
        <p>
        Уже есть аккаунт?
        <button
          className="form-auth__button_signin"
          onClick={evt => {
            evt.preventDefault();
            navigate('/sign-in');
          }}
        >
          Войдите
        </button>
      </p>
      </form>
    </>
  );
};
