import { useNavigate } from 'react-router-dom';
import './OrderServices.css';

export const OrderServices = () => {
  const navigate = useNavigate();

  return (
    <div className={'orderServices-container'}>
      <h1>Отдельный борд с заказами </h1>
      <button onClick={() => navigate('/catalog')}>В каталог</button>
    </div>
  );
};
