import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import Menu from "./components/Menu";
import { theme } from "./theme";
import Page from "./components/Page";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />
        <Page />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
