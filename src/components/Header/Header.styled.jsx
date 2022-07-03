import styled from 'styled-components';

export const HeaderSite = styled.header`
  border: 1px solid #eaeaea;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  margin-left: 15px;
`;

export const ProjectTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #000000;
`;

export const HeaderText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;

  color: #9d9d9d;
`;

export const Users = styled.ul`
  display: flex;
`;

export const UsersItem = styled.li`
  svg {
    width: 28px;
    height: 28px;
  }

  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
`;

export const BasketText = styled.p`
  margin-left: 10px;
`;
