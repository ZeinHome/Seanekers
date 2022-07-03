import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;

  color: #000000;
`;

export const SearchBlock = styled.main`
  position: relative;
  display: flex;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  padding: 0 15px;
`;

export const Search = styled.input`
  width: 200px;
  border: none;
  padding: 13px;
  font-size: 16px;
  outline: none;
`;

export const SearchImageRemove = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 10px;
  right: 0;
`;
