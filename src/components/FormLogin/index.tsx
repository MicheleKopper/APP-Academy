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
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/modules/userLogged/userLoggedSlice";
import { useNavigate } from "react-router-dom";

interface ErrorFields {
  email?: string;
  password?: string;
}

export function FormLogin() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const userLoggedRedux = useAppSelector((state) => state.userLogged);

  // Estado local
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setError] = useState<ErrorFields>({
    email: "",
    password: "",
  });

  function validate(email: string, password: string) {
    if (!email) {
      setError({ email: "Email is required!" });
      return;
    }

    if (!password) {
      setError({ password: "Password is required!" });
      return;
    }

    setError({});
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = event.currentTarget["email"].value;
    const password = event.currentTarget.password.value;
    const remember = event.currentTarget["remember"].checked;

    validate(email, password);

    dispatch(login({ email, password, remember }));

    // console.log({ email, password, remember });
  }

  useEffect(() => {
    // Se existir as infos do meu userLogged eu navego
    if (userLoggedRedux.id && !userLoggedRedux.errors) {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [userLoggedRedux, navigate]);

  return (
    <Grid2 container spacing={2} component={"form"} onSubmit={handleLogin}>
      {/* Título */}
      <Grid2 size={12} textAlign="center" fontWeight="bold">
        <Typography variant="h4">Sign in</Typography>
      </Grid2>

      {/* Campo de email */}
      <Grid2 size={12}>
        <FormControl fullWidth error={!!errors.email}>
          <FormLabel id="email">Email address</FormLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="your@gmail.com"
            variant="outlined"
            fullWidth
            error={!!errors.email || !!userLoggedRedux.errors}
            helperText={errors.email || !!userLoggedRedux.errors}
          />
        </FormControl>
      </Grid2>

      {/* Campo de senha */}
      <Grid2 size={12}>
        <FormControl fullWidth error={!!errors.password}>
          <FormLabel id="password">Password</FormLabel>
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="******"
            variant="outlined"
            fullWidth
            error={!!errors.password || !!userLoggedRedux.errors}
            helperText={errors.password || !!userLoggedRedux.errors}
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
