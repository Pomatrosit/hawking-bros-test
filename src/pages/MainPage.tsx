import { Stack } from "@mui/material";
import { CreateRandomCart } from "../components/Cart/CreateRandomCart";

export const MainPage = () => {
  return (
    <Stack spacing={3}>
      <h1>Main Page</h1>
      <CreateRandomCart />
    </Stack>
  );
};
