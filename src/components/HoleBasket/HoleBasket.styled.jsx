import styled from 'styled-components';

export const HoleBasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 220px;
`;

export const HoleBasketTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.2;
  margin-top: 20px;
`;

export const HoleBasketText = styled.p`
  width: 285px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  opacity: 0.4;
`;

export const HoleBasketButton = styled.button`
  position: relative;
  background: #9dd458;
  border-radius: 18px;
  padding: 20px 60px;
  color: #ffffff;
  border: none;
  outline: none;
  margin-top: 40px;
`;

export const HoleBasketImage = styled.img`
  position: absolute;
  top: 21px;
  left: 15px;
  transform: scale(-1, 1);
`;
