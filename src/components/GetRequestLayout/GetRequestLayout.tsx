import { Alert, Box, CircularProgress, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

type Props = {
  data: any;
  isLoading: boolean;
  error: any;
  emptyErrorMessage?: string;
};

export const GetRequestLayout: FC<Props & PropsWithChildren> = ({
  data,
  isLoading,
  error,
  children,
  emptyErrorMessage = "No rows",
}) => {
  if (isLoading)
    return (
      <Stack my={3} direction="row" justifyContent="center">
        <CircularProgress />
      </Stack>
    );

  if (error)
    return (
      <Box my={3}>
        <Alert severity="error">Something went wrong</Alert>
      </Box>
    );

  if (!data || (Array.isArray(data) && !data.length))
    return (
      <Box my={3}>
        <Alert severity="info">{emptyErrorMessage}</Alert>
      </Box>
    );

  return <Box height="100%">{children}</Box>;
};
