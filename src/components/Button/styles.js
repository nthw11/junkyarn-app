import styled, { css } from 'styled-components';

export const Button = styled.button`
  outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: white;
  color: black;
  border: 1px solid #d77e6a;
  white-space: nowrap;

  &:hover:not(:disabled) {
    color: #d77e6a;
    // border: 1px solid black;
  }

  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
    background-color: #555;
  }
`;
