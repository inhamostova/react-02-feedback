import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #2888dc;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: #9ac3e6;
  }

  &:active {
    background-color: blueviolet;
  }
`;
