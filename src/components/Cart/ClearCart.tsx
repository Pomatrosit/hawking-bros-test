import { Button } from "@mui/material";
import { useClearCartMutation } from "../../store/cart/cart.api";
import { useAlert } from "../../hooks/useAlert";

export const ClearCart = () => {
  const [clearCart, { isLoading, error }] = useClearCartMutation();
  useAlert(error);

  const handleClearCart = async () => {
    clearCart();
  };

  return (
    <Button variant="contained" onClick={handleClearCart} disabled={isLoading}>
      Clear cart
    </Button>
  );
};
