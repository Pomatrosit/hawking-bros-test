import { Typography } from "@mui/material";
import { CartItemType } from "../../types/cart";
import { FC } from "react";

type Props = {
  items: CartItemType[];
};

const getTotalPrice = (items: CartItemType[]) => {
  const totalPrice = items.reduce((acc, item) => {
    acc += item.Quantity * item.Price;
    return acc;
  }, 0);

  const currency = items?.[0]?.Сurrency;

  return `${totalPrice.toFixed(2)} ${currency}`;
};

export const Total: FC<Props> = ({ items }) => {
  return (
    <Typography variant="body1" fontSize={24}>
      {getTotalPrice(items)}
    </Typography>
  );
};
