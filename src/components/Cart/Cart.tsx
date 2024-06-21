import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CartItem } from "./CartItem";
import {
  useClearCartMutation,
  useGetProductsQuery,
} from "../../store/cart/cart.api";
import { GetRequestLayout } from "../GetRequestLayout/GetRequestLayout";
import { Total } from "./Total";
import { ClearCart } from "./ClearCart";
import { useEffect } from "react";

export const Cart = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  const [clearCart] = useClearCartMutation();

  // Когда удаляем по одному элементу и корзина опустошается на бэке возникает баг
  // а именно: невозможно сгенерировать новую корзину пока не очистить ее полностью
  useEffect(() => {
    if (Array.isArray(products) && !products.length) {
      clearCart();
    }
  }, [products?.length]);

  return (
    <GetRequestLayout
      data={products}
      isLoading={isLoading}
      error={error}
      emptyErrorMessage="The cart is empty"
    >
      <Stack mt={5} spacing={5}>
        <Stack direction="row" justifyContent="flex-end">
          <Button variant="contained">Order</Button>
        </Stack>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Count</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.map((product) => (
                  <CartItem key={product.Id} item={product} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {products && <Total items={products} />}
          <ClearCart />
        </Stack>
      </Stack>
    </GetRequestLayout>
  );
};
