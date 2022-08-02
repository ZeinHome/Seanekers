import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 95%;
  background: rgba(0, 0, 0, 0.5);

  z-index: 5;

  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  opacity: ${props => (props.opened ? 1 : 0)};
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
`;

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 420px;
  height: 100%;
  right: 0px;
  background: #ffffff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
  transform: ${props => (props.opened ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.3s ease-out;
`;

export const DrawerTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 30px;
  img {
    cursor: pointer;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`;

export const Cart = styled.ul`
  overflow-y: auto;
  margin-bottom: 50px;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  border-radius: 20px;
  overflow: hidden;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const CartPrice = styled.div`
  margin-left: 20px;
`;

export const CartTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 8px;
`;

export const CartTotal = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
`;

export const ButtonRemove = styled.img`
  opacity: 0.5;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const BoxOrder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;
`;

export const Order = styled.div`
  margin-top: auto;
`;

export const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ::before {
    content: '';
    display: block;
    flex-grow: 1;
    height: 1px;
    width: auto;
    background-color: rgba(62, 66, 82, 0.12);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const OrderTitle = styled.p`
  order: -1;
`;

export const ButtonOrder = styled.button`
  position: relative;
  background: #9dd558;
  border-radius: 18px;
  margin-top: 25px;
  padding: 18px 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transform: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: lighten($color: #9dd558, $amount: 5%);
    img {
      transform: translateX(5px);
    }
  }

  img {
    position: absolute;
    right: 30px;
    top: 20px;
  }
`;
