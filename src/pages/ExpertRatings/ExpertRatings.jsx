import { useLocation, useNavigate } from 'react-router-dom';
import './ExpertRatings.css';
export const ExecutorRatings = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, id } = state;
  return (
    <div className={'expertRatings-container'}>
      <h1>Рейтинги и отзывы исполнителя: {name}</h1>
      <button onClick={() => navigate('/catalog')}>Перейти в каталог</button>
      <button onClick={() => navigate(`/card/${id}`, { state: { name, id } })}>
        На страницу исполнителя
      </button>
    </div>
  );
};
