import { Stack, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "70px",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Stack
        sx={{
          mt: 6,
          ml: 10,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "head",
            color: "white",
            fontSize: "20px",
          }}
        >
          SwiftStack
        </Typography>
      </Stack>

      <Stack
        sx={{
          mt: 5,
          mr: 10,
          flexDirection: "row",
          gap: 8,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "nav",
            color: "white",
            opacity: 0.8,
            fontSize: "17px",
            transition: "0.3s ease-out",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          Introduction
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "nav",
            color: "white",
            opacity: 0.8,
            transition: "0.3s ease-out",
            fontSize: "17px",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "nav",
            color: "white",
            opacity: 0.8,
            transition: "0.3s ease-out",
            fontSize: "17px",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          Contact
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Navbar;
