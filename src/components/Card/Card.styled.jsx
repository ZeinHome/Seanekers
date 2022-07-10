import styled from 'styled-components';

export const GalleryItem = styled.li`
  position: relative;
  width: calc((100% - 160px) / 4);
  margin-right: 40px;
  margin-bottom: 40px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  border-radius: 40px;
  transform: box-shadow 0.3s ease-in-out, transform 0, 2s ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid #f8f8f8;
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-5px);
  }
  img {
    cursor: pointer;
  }
  :nth-child(4n + 4) {
    margin-right: 0px;
  }
  :nth-last-child(-n + 2) {
    margin-bottom: 0px;
  }
  :nth-last-child(-n + 1) {
    margin-right: 0px;
  }
`;

export const ButtonFavorite = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 3;
`;

export const CardContainer = styled.div`
  padding: 20px 30px;
`;

export const GalleryTitle = styled.h3`
  width: 150px;
  margin-top: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;

  color: #000000;
`;

export const CardMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const PriceText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 1.1;
  text-transform: uppercase;

  color: #bdbdbd;
`;

export const PriceTotal = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
export const ButtonAdd = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: $bg-color-primary;
  border: 1px solid $btn-add;
  border-radius: 8px;
  cursor: pointer;
`;
