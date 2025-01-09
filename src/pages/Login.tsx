import { Google, Facebook } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FormLogin } from "../components/FormLogin";

export function Login() {
  // Alert para botões sem redirecionamento
  function handleImplements() {
    alert("Not implementeds");
  }
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
        <Card elevation={4} sx={{ p: 4, borderRadius: 2 }}>
          {/* Logo */}
          <Grid2 container spacing={2}>
            <img
              src="https://www.growdev.com.br/assets/images/logo_growdev.svg"
              alt="Logo Growdev"
              width={140}
            />

            {/* FormLogin */}
            <Grid2 size={12}>
              <FormLogin />
            </Grid2>

            {/* Senha */}
            <Grid2 size={12} textAlign={"center"}>
              <Link
                to={"#"}
                style={{ textDecoration: "none", fontSize: "0.9rem" }}
                onClick={handleImplements}
              >
                Forfot your password
              </Link>
            </Grid2>

            {/* Divider */}
            <Grid2 size={12}>
              <Divider>Or</Divider>
            </Grid2>

            {/* Botões sociais */}
            <Grid2 size={12}>
              <Button
                variant="outlined"
                fullWidth
                size="large"
                startIcon={<Google />}
                onClick={handleImplements}
              >
                Sign in with google
              </Button>
            </Grid2>

            <Grid2 size={12}>
              <Button
                variant="outlined"
                fullWidth
                size="large"
                startIcon={<Facebook />}
                onClick={handleImplements}
              >
                Sign in with facebook
              </Button>
            </Grid2>

            {/* Link para registro */}
            <Grid2 size={12} textAlign={"center"}>
              <Typography>
                {" "}
                Don't have an accout?
                <Link
                  to={"#"}
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                  onClick={handleImplements}
                >
                  Sign up
                </Link>
              </Typography>
            </Grid2>
          </Grid2>
        </Card>
      </Container>
    </Box>
  );
}
