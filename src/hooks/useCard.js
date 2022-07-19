import { useContext } from 'react';
import { AppContext } from 'components/App';

export const useCard = () => {
  const { cartItem, setCartItem } = useContext(AppContext);
  const totalPrice = cartItem.reduce((sum, obj) => obj.price + sum, 0);

  return { cartItem, setCartItem, totalPrice };
};
