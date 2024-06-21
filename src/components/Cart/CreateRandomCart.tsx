import { Box, Button } from "@mui/material";
import { useCreateRandomCartMutation } from "../../store/cart/cart.api";
import { useAlert } from "../../hooks/useAlert";

export const CreateRandomCart = () => {
  const [createCart, { isLoading, error }] = useCreateRandomCartMutation();
  useAlert(error);

  const handleCreateCart = () => {
    createCart(3);
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleCreateCart}
        disabled={isLoading}
      >
        Create Random Cart
      </Button>
    </Box>
  );
};
