import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { ROUTES } from "./constants/routes";
import { Box } from "@mui/material";

function App() {
  return (
    <Box margin="0 auto" maxWidth={1400}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
