import { useNavigate } from 'react-router-dom';
import './404.css';
export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className={'container'}>
      <h1>Страница не найдена</h1>
      <button onClick={() => navigate(`/catalog`)}>Вернуться в каталог</button>
      <button onClick={() => navigate(`/`)}>На главную страницу</button>
    </div>
  );
};
