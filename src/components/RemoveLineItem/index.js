import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import CartContext from '../../context/CartContext';
import { Icon } from './styles';

export function RemoveLineItem({ lineItemId }) {
  const { removeLineItem } = React.useContext(CartContext);

  const handleClick = () => {
    removeLineItem(lineItemId);
  };

  return (
    <Icon onClick={handleClick}>
      <FaTrashAlt />
    </Icon>
  );
}
