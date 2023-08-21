import { useLocation, useNavigate } from 'react-router-dom';
import './ClientAccount.css';
export const ClientAccount = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, id } = state;
  return (
    <div className={'clientAccount-container'}>
      <h1>Личный кабинет клиента: {name}</h1>
      <button onClick={() => navigate('/catalog')}>Перейти в каталог</button>
      <button onClick={() => navigate(`/client/${id}/orders`, { state: { name, id } })}>
        Заказы
      </button>
    </div>
  );
};
