import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./components/common/Navbar";
import Home from "./components/view/Home";
import Pages from "./components/view/Pages";
import "./styles/indexx.css"
import { theme } from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Pages />
      </Box>
    </ThemeProvider>
  );
}

export default App;
