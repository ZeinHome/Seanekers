import remove from '../images/search/btn-remove.svg';
import arrow from '../images/drawer/arrow-order.svg';
import HoleBasket from '../HoleBasket/HoleBasket';
import orderDone from '../images/drawer/order-done.png';
import holeBasket from '../images/drawer/hole-basket.png';
import axios from 'axios';
import { useState } from 'react';
import { useCard } from '../../hooks/useCard';
import {
  Overlay,
  Drawer,
  DrawerTitle,
  Box,
  Cart,
  CartItem,
  CartPrice,
  CartTitle,
  CartTotal,
  ButtonRemove,
  BoxOrder,
  Order,
  OrderItem,
  OrderTitle,
  ButtonOrder,
} from './Drawer.styled';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function Draver({ onClose, onRemove, item = [], isOpened }) {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cartItem, setCartItem, totalPrice, setCartOpen } = useCard();

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        `https://62b034b1b0a980a2ef4d39ed.mockapi.io/orders`,
        { items: cartItem }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItem([]);

      for (let i = 0; i < cartItem.length; i++) {
        const item = cartItem[i];

        await axios.delete(
          'https://62b034b1b0a980a2ef4d39ed.mockapi.io/cart/' + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert(`не удалось сделать заказ ${error}`);
    }
  };

  return (
    <Overlay onClick={() => setCartOpen(false)} opened={isOpened}>
      <Drawer onClick={e => e.stopPropagation()} opened={isOpened}>
        <DrawerTitle>
          Корзина <img onClick={onClose} src={remove} alt="close" />{' '}
        </DrawerTitle>

        {item.length > 0 ? (
          <Box>
            <Cart>
              {item.map(({ title, price, imageUrl, id }) => {
                return (
                  <CartItem key={id}>
                    <img width={70} height={70} src={imageUrl} alt={title} />
                    <CartPrice>
                      <CartTitle>{title}</CartTitle>
                      <CartTotal>{price} грн.</CartTotal>
                    </CartPrice>
                    <ButtonRemove
                      onClick={() => onRemove(id)}
                      src={remove}
                      alt="remove"
                    />
                  </CartItem>
                );
              })}
            </Cart>

            <BoxOrder>
              <Order>
                <OrderItem>
                  <OrderTitle>Итого:</OrderTitle>
                  <span>{totalPrice} грн. </span>
                </OrderItem>
                <OrderItem>
                  <OrderTitle>Налог 5%:</OrderTitle>{' '}
                  <span>{Math.round(totalPrice * 0.05)} грн.</span>
                </OrderItem>
              </Order>

              <ButtonOrder type="submit" onClick={onClickOrder}>
                <p> Оформить заказ</p>
                <img src={arrow} alt="Arrow" />
              </ButtonOrder>
            </BoxOrder>
          </Box>
        ) : (
          <HoleBasket
            onClose={onClose}
            title={isOrderComplete ? 'Корзина пустая' : 'Заказ оформлен!'}
            description={
              isOrderComplete
                ? 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                : ` Ваш заказ ${orderId} скоро будет передан курьерской доставке`
            }
            image={isOrderComplete ? orderDone : holeBasket}
          />
        )}
      </Drawer>
    </Overlay>
  );
}

export default Draver;
