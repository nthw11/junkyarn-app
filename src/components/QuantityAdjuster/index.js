import React from 'react';
import { QuantityAdjusterWrapper, AdjusterButton } from './styles';
import {
  FaCaretUp,
  FaCaretDown,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

export function QuantityAdjuster({ item, onAdjust }) {
  const { quantity } = item;

  const handleDecrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };
  const handleIncrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: 1 });
  };

  return (
    <QuantityAdjusterWrapper>
      <AdjusterButton>
        <FaCaretDown onClick={handleDecrementQuantity} size="1.25em" />
      </AdjusterButton>
      {quantity}
      <AdjusterButton>
        <FaCaretUp onClick={handleIncrementQuantity} size="1.25em" />
      </AdjusterButton>
    </QuantityAdjusterWrapper>
  );
}
