import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Address() {
  return (
    <Box
      sx={{
        // width: 500,
        padding: "0 25%",
        maxWidth: "100%",
      }}
    >
      <Stack gap={3}>
        <TextField fullWidth label="Name" id="fullWidth" />
        <TextField fullWidth label="email" id="fullWidth" />
        <TextField fullWidth label="mobile" id="fullWidth" />
        <TextField fullWidth label="password" id="fullWidth" />
        <TextField fullWidth label="confirm password" id="fullWidth" />
        <Button variant="contained" color="info">
          Register
        </Button>
        <div style={{ textAlign: "center" }}>
          {"Already have an Account? "}
          <Link to="/login">Login</Link>
        </div>
      </Stack>
    </Box>
  );
}
