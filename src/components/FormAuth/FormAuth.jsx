import './FormAuth.css';

export const FormAuth = props => {
  const { child, buttonTitle, onSubmit, isFormValid } = props;

  return (
    <>
      <form
        className="form-auth"
        onSubmit={onSubmit}
        action="#"
      >
        {child}
        <button
          className=""
          type="submit"
          disabled={!isFormValid}
        >
          {buttonTitle}
        </button>
      </form>
    </>
  );
};
