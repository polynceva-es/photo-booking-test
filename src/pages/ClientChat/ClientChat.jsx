import { useLocation, useNavigate } from 'react-router-dom';
import './ClientChat.css';
export const ClientChat = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, id } = state;
  return (
    <div className={'clientChat-container'}>
      <h1>Чат клиента: {name}</h1>
      <button onClick={() => navigate('/catalog')}>Перейти в каталог</button>
      <button onClick={() => navigate(`/client/${id}/orders`, { state: { name, id } })}>
        Заказы
      </button>
    </div>
  );
};
