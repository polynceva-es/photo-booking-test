import { Link } from 'react-router-dom';
import './LinkSignin.css';

export const LinkSignIn = props => {
  const { url, logo, title } = props;
  return (
    <Link
      className="link-signin"
      to={url}
      target="_blank"
    >
      <img
        className="link-signin__logo"
        src={logo}
        alt="logo"
      />
      <p className="link-signin__title">{title}</p>
    </Link>
  );
};
