import { useLocation, useNavigate } from 'react-router-dom';
import './Profile.css';
export const Profile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, id } = state;
  return (
    <div className={'profile-container'}>
      <h1>{name}</h1>
      <button onClick={() => navigate(`/catalog`)}>Вернуться в каталог</button>
      <button onClick={() => navigate(`/expert/${id}/ratings`, { state: { name, id } })}>
        Отзывы и рейтинги
      </button>
    </div>
  );
};
