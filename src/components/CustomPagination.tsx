import { useState } from "react";
import { Button, Box, Typography, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const data = [...Array(100).keys()]; // Sample data array

const CustomPagination = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 1;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginY: 3,
      }}
    >
      <Typography
        variant={isMobile ? "subtitle1" : "h6"}
        gutterBottom
        sx={{ marginLeft: 2, textAlign: "center" }}
      >
        Page {currentPage} of {totalPages}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          sx={{ marginRight: 2 }}
        >
          Previous
        </Button>
        <Paper elevation={2}>
          {currentData.map((item, index) => (
            <Typography
              key={index}
              sx={{ paddingY: 0.5, paddingX: 2 }}
              variant="subtitle1"
            >
              Item {item + 1}
            </Typography>
          ))}
        </Paper>
        <Button
          sx={{ marginLeft: 2 }}
          variant="contained"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CustomPagination;
