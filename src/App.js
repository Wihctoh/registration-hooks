// import {
//   AppBar,
//   Button,
//   Stack,
//   Toolbar,
//   Typography,
//   TextField,
// } from "@mui/material";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      {/* <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6" textAlign="left">
            Welcome to the React project!
          </Typography>

          <Stack spacing={2} direction="row">
            <Button color="inherit">Sing In</Button>
            <Button color="inherit">Log In</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

      <LoginPage />
    </div>
  );
}

export default App;
