import React, { useEffect, useState } from "react";
import { Hidden, Stack, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
const LandingPage = () => {
  const [mouseHover, setMousehover] = useState({
    x: 0,
    y: 0,
  });

  const [str, setStr] = useState("Transforming Ideas into Digital Reality");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousehover({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mouseHover.x - 10,
      y: mouseHover.y - 75,
    },
  };

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Navbar />
      <motion.div
        style={{
          backgroundColor: "transparent",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          border: "1px solid white",
        }}
        variants={variants}
        animate="default"
      />

      <Stack>
        <motion.a
          initial="initial"
          whileHover="hover"
          style={{
            fontWeight: "bold",
            fontFamily: "land",
            color: "white",
            opacity: 0.8,
            fontSize: "17px",
            transition: "0.3s ease-out",
            fontSize: "200px",
            margin: 3,
            wordSpacing: "10px",
            backgroundColor: "red",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div>
            {str.split("").map((e, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                  },
                  hover: {
                    y: "-200%",
                  },
                }}
                transition={{
                  delay: 0.025 * i,
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                style={{
                  display: "inline-block",
                }}
              >
                {e}
              </motion.span>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              left: 0,
              bottom: 0,
            }}
          >
            {str.split("").map((e, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: "300%",
                  },
                  hover: {
                    y: 0,
                  },
                }}
                transition={{
                  delay: 0.025 * i,
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                style={{
                  display: "inline-block",
                }}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </motion.a>
      </Stack>
    </Stack>
  );
};

export default LandingPage;
