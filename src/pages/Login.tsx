import {
  VisibilityOff,
  Visibility,
  CheckBox,
  Google,
  Facebook,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  // Estado local
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container maxWidth="xs">
        <Card elevation={4} sx={{ p: 4 }}>
          <Grid2 size={12}>
            <img
              src="https://www.growdev.com.br/assets/images/logo_growdev.svg"
              alt="Logo Growdev"
              width={140}
            />

            <Grid2 size={12}>
              <Typography variant="h4">Sign in</Typography>
            </Grid2>

            <Grid2 size={12}>
              <FormControl fullWidth>
                <FormLabel id="email">Email address</FormLabel>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@gmail.com"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
            </Grid2>

            <Grid2 size={12}>
              <FormControl fullWidth>
                <FormLabel id="password">Password</FormLabel>
                <TextField
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid2>

            <Grid2 size={12}>
              <FormControlLabel
                name="remember"
                control={<CheckBox />}
                label="Remember me"
              />
            </Grid2>

            <Grid2 size={12}>
              <Button variant="contained" fullWidth>
                Sign in
              </Button>
            </Grid2>

            <Grid2 size={12} textAlign={"center"}>
              <Link to={"#"}>Forfot your password</Link>
            </Grid2>

            <Grid2 size={12}>
              <Divider>Or</Divider>
            </Grid2>

            <Grid2 size={12}>
              <Button variant="outlined" fullWidth startIcon={<Google />}>
                Sign in with google
              </Button>
            </Grid2>

            <Grid2 size={12}>
              <Button variant="outlined" fullWidth startIcon={<Facebook />}>
                Sign in with facebook
              </Button>
            </Grid2>

            <Grid2 size={12} textAlign={"center"}>
              <Typography>
                {" "}
                Don't have an accout?
                <Link to={"#"}> Sign up</Link>
              </Typography>
            </Grid2>
          </Grid2>
        </Card>
      </Container>
    </Box>
  );
}
