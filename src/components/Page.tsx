import { Box, Paper } from "@mui/material";

export default function Page() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{ mx: 4, p: 4, minHeight: "11in", maxWidth: "8in", flexGrow: 1 }}
      >
        Hello world!
      </Paper>
    </Box>
  );
}
