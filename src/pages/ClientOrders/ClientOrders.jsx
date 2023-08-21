import { useLocation, useNavigate } from 'react-router-dom';
import './ClientOrders.css';
export const ClientOrders = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, id } = state;
  return (
    <div className={'clientOrders-container'}>
      <h1>Заказы клиента: {name}</h1>
      <button onClick={() => navigate('/catalog')}>Перейти в каталог</button>
      <button onClick={() => navigate(`/client/${id}`, { state: { name, id } })}>
        Личный кабинет
      </button>
      <button onClick={() => navigate(`/client/${id}/chat`, { state: { name, id } })}>Чат</button>
    </div>
  );
};
