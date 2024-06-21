import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Button, Stack, Typography } from "@mui/material";
import { useGetHeaderQuery } from "../../store/header/header.api";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  const { data } = useGetHeaderQuery();

  return (
    <header>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <img
          src={`data:image/png;base64,${data?.LogoImg}`}
          style={{ width: "50px" }}
        />

        <Stack direction="row" gap={2}>
          {ROUTES.map((route) => (
            <NavLink key={route.path} to={route.path}>
              <Button>{route.linkTitle}</Button>
            </NavLink>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <Typography>{data?.UserName}</Typography>
          <UserMenu />
        </Stack>
      </Stack>
    </header>
  );
};
