import {
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItemType } from "../../types/cart";
import {
  useQuantityDecMutation,
  useQuantityIncMutation,
  useRemoveItemMutation,
} from "../../store/cart/cart.api";
import { useAlert } from "../../hooks/useAlert";
import { useGetHeaderQuery } from "../../store/header/header.api";

type Props = {
  item: CartItemType;
};

const getImageSrc = (item: CartItemType) => {
  if (!item.Images.length) return "";
  return `data:image/png;base64,${item.Images[0].Image}`;
};

export const CartItem: FC<Props> = ({ item }) => {
  const { data } = useGetHeaderQuery();
  const [removeItem, { isLoading: removeLoading, error: removeError }] =
    useRemoveItemMutation();
  const [inc, { isLoading: incLoading, error: incError }] =
    useQuantityIncMutation();
  const [dec, { isLoading: decLoading, error: decError }] =
    useQuantityDecMutation();
  useAlert(removeError || incError || decError);

  const handleRemove = () => {
    removeItem({
      ProductId: item.Id,
      UserGuid: String(data?.UsedGuid),
    });
  };

  const handleIncrement = () => {
    inc({
      ProductId: item.Id,
      UserGuid: String(data?.UsedGuid),
    });
  };

  const handleDecrement = () => {
    item.Quantity > 1 &&
      dec({
        ProductId: item.Id,
        UserGuid: String(data?.UsedGuid),
      });
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        <img src={getImageSrc(item)} style={{ width: 50 }} />
      </TableCell>
      <TableCell>{item.Name}</TableCell>
      <TableCell align="right">
        {item.Price} {item.Сurrency}
      </TableCell>
      <TableCell align="center">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <IconButton
            onClick={handleDecrement}
            disabled={incLoading || decLoading}
          >
            <RemoveIcon />
          </IconButton>
          <Typography>{item.Quantity}</Typography>
          <IconButton
            onClick={handleIncrement}
            disabled={incLoading || decLoading}
          >
            <AddIcon />
          </IconButton>
        </Stack>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={handleRemove} disabled={removeLoading}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
