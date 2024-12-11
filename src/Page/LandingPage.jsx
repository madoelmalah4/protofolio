import React, { useEffect, useState } from "react";
import { Box, Hidden, Stack, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import AnimatedText from "../Components/AnimatedText";
import img1 from '../assets/img.jpg'
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
          zIndex:9999
        }}
        variants={variants}
        animate="default"
      />

      <Stack sx={{
        alignItems:"center",
        width:"90%",
        borderRadius:"30px",
        height:"100%",
        mt:5,
        ml:13,
        p:4,
      }}>
       <AnimatedText str={"Empower Your Business with Stunning, High-Performance Websites!"} fontSize={70} speed={0.003}/>
       <Box component={"img"}
       src={img1}
       sx={{
        width:"900px",
        borderRadius:"30px",
        transition:"0.3s ease-out",
        "&:hover":{
          scale:"1.01"
        }
       }}
       />
      </Stack>
    </Stack>
  );
};

export default LandingPage;
