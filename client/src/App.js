import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegPage/RegPage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/registration" element={<RegPage />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
