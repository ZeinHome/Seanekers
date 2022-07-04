import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  z-index: 5;
`;

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 420px;
  height: 94%;
  right: 0px;
  background: #ffffff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;
// .cart {
//     overflow-y: auto;
//     margin-bottom: 50px;
//   }
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
