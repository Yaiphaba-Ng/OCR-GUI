import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { KeyCloakService } from "../security/KeycloakService";
import Googlelogo from "../assets/google.svg?react";

const Login = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: isMobile ? "column" : "row",
          marginBottom: isMobile ? "8px" : "16px",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          fontWeight={700}
          gutterBottom
        >
          Sign in to
        </Typography>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          fontWeight={700}
          color="secondary"
        >
          &nbsp;OCR
        </Typography>
      </Box>

      <Typography
        variant={isMobile ? "subtitle2" : "subtitle1"}
        color="#acb4ac"
        marginBottom={isMobile ? 1 : 2}
        letterSpacing={2}
        textAlign="center"
      >
        Welcome user, please sign in to continue
      </Typography>

      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={
          <Googlelogo
            style={{
              width: isMobile ? 30 : 40,
              height: isMobile ? 30 : 40,
            }}
          />
        }
        sx={{
          textTransform: "capitalize",
          fontSize: isMobile ? "0.875rem" : "1rem",
          padding: isMobile ? "8px 16px" : "12px 24px",
        }}
        onClick={() => KeyCloakService.doLogin()}
      >
        Sign In With Google
      </Button>
    </Box>
  );
};

export default Login;
