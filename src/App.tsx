import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RenderOnAnonymous from "./components/RenderOnAnonymous";
import RenderOnAuthenticated from "./components/RenderOnAuthenticated";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { Box, CircularProgress } from "@mui/material";
import ImageToText from "./pages/ImageToText";

const ProtectedRoutes: React.FC = () => (
  <Box
    component={"div"}
    sx={{ height: "100%", display: "flex", flexDirection: "column" }}
  >
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="image-to-text" element={<ImageToText />} />
    </Routes>
  </Box>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          sx={{
            color: "#000",
          }}
        />
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <RenderOnAnonymous>
                <Login />
              </RenderOnAnonymous>
              <RenderOnAuthenticated>
                <ProtectedRoutes />
              </RenderOnAuthenticated>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
