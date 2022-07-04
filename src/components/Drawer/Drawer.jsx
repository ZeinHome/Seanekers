import remove from '../images/search/btn-remove.svg';
// import arrow from '../images/arrow-order.svg';
import { Overlay, Drawer, DrawerTitle } from './Drawer.styled';
// { , onRemove, item = [] }

function Draver({ onClose }) {
  return (
    <Overlay>
      <Drawer>
        <DrawerTitle>
          Корзина <img onClick={onClose} src={remove} alt="close" />{' '}
        </DrawerTitle>
        {/* {item.length > 0 ? (
          <div className="box">
            <ul className="cart">
              {item.map(({ title, price, imageUrl, id }) => {
                return (
                  <li className="cart__item" key={id}>
                    <img width={70} height={70} src={imageUrl} alt={title} />
                    <div className="cart__price">
                      <p className="cart__title">{title}</p>
                      <b className="cart__total">{price} грн.</b>
                    </div>
                    <img
                      onClick={() => onRemove(id)}
                      src={remove}
                      alt="remove"
                    />
                  </li>
                );
              })}
            </ul>

            <div className="box-order">
              <ul className="order">
                <li className="order__item">
                  <p className="order__title">Итого:</p>{' '}
                  <span>21 498 грн. </span>
                </li>
                <li className="order__item">
                  <p className="order__title">Налог 5%:</p>{' '}
                  <span>1074 грн.</span>
                </li>
              </ul>

              <button button type="submit" className="btn-order">
                <p> Оформить заказ</p>
                <img src={arrow} alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <HoleBasket onClose={onClose} />
        )} */}
      </Drawer>
    </Overlay>
  );
}

export default Draver;
