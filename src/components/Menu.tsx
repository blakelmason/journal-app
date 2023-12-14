import { AppBar, IconButton, Toolbar } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function Menu() {
  return (
    <AppBar position="sticky" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton size="large">
          <TerminalIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
