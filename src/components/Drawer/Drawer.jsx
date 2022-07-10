import remove from '../images/search/btn-remove.svg';
import arrow from '../images/drawer/arrow-order.svg';
import HoleBasket from '../HoleBasket/HoleBasket';
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

function Draver({ onClose, onRemove, item = [] }) {
  return (
    <Overlay>
      <Drawer>
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
                  <OrderTitle>Итого:</OrderTitle> <span>21 498 грн. </span>
                </OrderItem>
                <OrderItem>
                  <OrderTitle>Налог 5%:</OrderTitle> <span>1074 грн.</span>
                </OrderItem>
              </Order>

              <ButtonOrder type="submit">
                <p> Оформить заказ</p>
                <img src={arrow} alt="Arrow" />
              </ButtonOrder>
            </BoxOrder>
          </Box>
        ) : (
          <HoleBasket onClose={onClose} />
        )}
      </Drawer>
    </Overlay>
  );
}

export default Draver;
