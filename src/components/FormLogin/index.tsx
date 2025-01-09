import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Button,
  Checkbox,
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

export function FormLogin() {
  // Estado local
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setError] = useState<Record<string, string>>({});

  function isRequired(field: string) {
    if (!field) {
      setError((prev) => ({ ...prev, [field]: `${field} is required!` }));
    }
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = event.currentTarget["email"].value;
    const password = event.currentTarget.password.value;
    const remember = event.currentTarget["remember"].checked;

    console.log({ email, password, remember });
  }

  return (
    <Grid2 container spacing={2} component={"form"} onSubmit={handleLogin}>
      {/* Título */}
      <Grid2 size={12} textAlign="center" fontWeight="bold">
        <Typography variant="h4">Sign in</Typography>
      </Grid2>

      {/* Campo de email */}
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

      {/* Campo de senha */}
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

      {/* Checkbox e botão de login */}
      <Grid2
        size={12}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <FormControlLabel
          name="remember"
          control={<Checkbox />}
          label="Remember me"
        />
      </Grid2>

      <Grid2 size={12}>
        <Button variant="contained" fullWidth size="large" type="submit">
          Sign in
        </Button>
      </Grid2>
    </Grid2>
  );
}
