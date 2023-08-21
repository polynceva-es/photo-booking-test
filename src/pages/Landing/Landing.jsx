import { useNavigate } from 'react-router-dom';
import './Landing.css';
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={'landing-container'}>
      <h1>Лэндинг</h1>
      <button onClick={() => navigate('/sign-in')}>Войти</button>
      <button onClick={() => navigate('/order-service')}>Заказать услугу</button>
    </div>
  );
};
