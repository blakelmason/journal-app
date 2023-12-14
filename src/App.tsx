import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import Menu from "./components/Menu";
import { theme } from "./theme";
import Page from "./components/Page";
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <Menu />
          <Page />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
