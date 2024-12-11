import React, { useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Stack, Tooltip } from "@mui/material";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import AnimatedText from "../Components/AnimatedText";
import img1 from "../assets/img.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const LandingPage = () => {
  const InpRef = useRef(null); 
  const [mouseHover, setMouseHover] = useState({ x: 0, y: 0 });
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const mouseMove = (e) => {
      setMouseHover({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = InpRef.current.container.current.scrollTop / window.innerHeight;
      if (scrollOffset >= 1 && scrollOffset < 2) {
        setBgColor("white"); 
      } else {
        setBgColor("transparent");
      }
    };

    const container = InpRef.current.container.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    default: {
      x: mouseHover.x - 10,
      y: mouseHover.y - 75,
    },
  };

  return (
    <Parallax pages={4} ref={InpRef}>
      <ParallaxLayer speed={0.2} factor={1} offset={0}>
        <Stack
          sx={{
            width: "100vw",
            height: "100%",
            backgroundColor: bgColor,
          }}
        >
          <Navbar />
          {/* <motion.div
            style={{
              backgroundColor: "transparent",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              border: "1px solid white",
              zIndex: 9999,
            }}
            variants={variants}
            animate="default"
          /> */}

          <Stack
            sx={{
              alignItems: "center",
              width: "90%",
              borderRadius: "30px",
              height: "100%",
              mt: 5,
              ml: 13,
              p: 4,
              justifyContent: "start",
              gap:4
            }}
          >
            <AnimatedText
              str={"Empower Your Business with Stunning, High-Performance Websites!"}
              fontSize={70}
              speed={0.003}
            />
            <Tooltip title="Go to Introduction" arrow={true} placement="top"  sx={{
              padding:3
            }}>
            <Box
              component={"img"}
              src={img1}
              sx={{
                width: "900px",
                borderRadius: "30px",
                transition: "0.3s ease-out",
                "&:hover": {
                  scale: "1.01",
                  boxShadow: "7px 7px 0px #2575FC",
                },
              }}
              onClick={() => InpRef.current.scrollTo(1.3)}
              />
              </Tooltip>
          </Stack>
        </Stack>
      </ParallaxLayer>

      <ParallaxLayer speed={0.2} factor={2} offset={0.5}>
        <Stack
          sx={{
            backgroundColor: bgColor,
            width: "100vw",
            height: "100%",
            transition:"0.3s ease"
          }}
        >

        </Stack>
      </ParallaxLayer>
    </Parallax>
  );
};

export default LandingPage;
