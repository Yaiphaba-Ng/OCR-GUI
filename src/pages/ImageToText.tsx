import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router";
import { useCallback, useEffect, useState } from "react";

const ImageToText = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const { state } = useLocation();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFileUpload = useCallback(() => {
    if (state?.file) {
      const formData = new FormData();
      formData.append("file", state.file);

      fetch(`${import.meta.env.VITE_APP_BASE_URL}/upload-image`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log({ "error....": error });
        });
    }
  }, [state?.file]);

  const output_text =data?.data["output"];

  // const imageUrl = data?.image;
  const imageUrl = data?.data["output"];

  console.log({ "IMAGE...": data?.image, "imageUrl...": imageUrl });

  useEffect(() => {
    handleFileUpload();
  }, [handleFileUpload]);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        sx={{ marginY: isMobile ? 0 : 5, textAlign: "center", fontWeight: 700 }}
      >
        Converting Image to Text
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobile ? "column" : "row",
          margin: isMobile ? 2 : 0,
        }}
      >
        <Box
          sx={{
            marginLeft: isMobile ? 0 : 10,
            width: isMobile ? "100%" : "40%",
          }}
        >
          <img
            src={data?.image}
            alt={imageUrl}
            loading="lazy"
            width={"100%"}
            height={isMobile ? "300" : "500"}
            style={{ objectFit: "contain", borderRadius: 3 }}
          />
        </Box>

        <Paper
          elevation={1}
          sx={{
            marginTop: isMobile ? 2 : 0,
            marginRight: 10,
            padding: isMobile ? 0 : 5,
            width: isMobile ? "100%" : "40%",
          }}
        >
          <Typography variant="p">{output_text}</Typography>
        </Paper>
      </Box>
      {/* <CustomPagination /> */}
    </Box>
  );
};

export default ImageToText;
