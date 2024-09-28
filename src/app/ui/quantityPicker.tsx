import { useState } from 'react';

export const QuantityPicker = ({
  initQuantity = 1,
  onIncrease,
  onDecrease,
  onChangeProductQuantity,
  isCheckout = false,
}: {
  initQuantity?: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChangeProductQuantity: (e: any) => void;
  isCheckout?: boolean;
}) => {
  return (
    <div className="flex gap-3 items-center px-3 rounded-full bg-body-text/5 lg:h-[80%]">
      <button
        className="rounded-full flex items-center justify-center border bg-default border-border w-5 h-5"
        onClick={onDecrease}
      >
        -
      </button>
      <input
        type="text"
        value={initQuantity}
        className="w-7 text-sm text-center bg-border/5 placeholder:bg-gray focus:outline-none"
        onChange={onChangeProductQuantity}
      />
      <button
        className="rounded-full flex items-center justify-center border bg-default border-border w-5 h-5"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};
