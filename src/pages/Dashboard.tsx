import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { createRef, useCallback } from "react";
import Dropzone, { DropzoneRef } from "react-dropzone";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import { useNavigate } from "react-router";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const dropzoneRef = createRef<DropzoneRef>();

  const navigate = useNavigate();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        navigate("/image-to-text", { state: { file: acceptedFiles[0] } });
      }
    },
    [navigate]
  );

  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            color="textSecondary"
            fontWeight={700}
          >
            Image to
          </Typography>
          <Typography variant="h3" color="secondary" fontWeight={700}>
            &nbsp;Text
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          color="#acb4ac"
          gutterBottom
          letterSpacing={2}
        >
          Our image to text converter let you extract text from image in on
          click.
        </Typography>
        <Typography variant="subtitle1">
          We support JPG, JPEG, PNG, PDF files.
        </Typography>
      </Box>
      <Dropzone ref={dropzoneRef} noClick noKeyboard onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => {
          return (
            <Box
              component={"div"}
              {...getRootProps({
                style: {
                  border: "2px dashed #ccc",
                  height: 300,
                  borderRadius: 10,
                  width: isMobile ? "90%" : "50%",
                },
              })}
            >
              <input {...getInputProps()} />
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <AddPhotoAlternateRoundedIcon
                  sx={{ fontSize: 80, marginBottom: 2, color: "#acb4ac" }}
                />

                <Button
                  type="button"
                  onClick={openDialog}
                  variant="contained"
                  startIcon={<FileUploadIcon />}
                >
                  Upload Image
                </Button>
                <Box marginBottom={2} />
                <Typography variant="subtitle1" color={"#acb4ac"}>
                  Drag &amp; Drop to upload
                </Typography>
              </Box>
            </Box>
          );
        }}
      </Dropzone>
    </Box>
  );
};

export default Dashboard;
