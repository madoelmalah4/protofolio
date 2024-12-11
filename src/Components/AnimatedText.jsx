import { motion } from "framer-motion";
import { Stack } from "@mui/material";

const AnimatedText = ({ str, fontSize, speed, fontFamily }) => {
  return (
    <Stack>
      <motion.a
        initial="initial"
        whileHover="hover"
        style={{
          fontWeight: 500,
          fontFamily: fontFamily || "land",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          opacity: 0.8,
          fontSize: fontSize || 22,
          transition: "0.3s ease-out",
          margin: 3,
          wordSpacing: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            width: "100%",
            textWrap:"nowrap"
          }}
        >
          {str.split("").map((e, i) => (
            <motion.span
              key={`top-${i}`}
              variants={{
                initial: { y: 0 },
                hover: { y: "-100%" },
              }}
              transition={{
                delay: speed * i,
                duration: 0.4,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                position: "relative",
                whiteSpace: "pre",
                color: "white",
              }}
            >
              {e === " " ? "\u00A0" : e}
            </motion.span>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            paddingRight: "5px",
            marginBottom: 7,
            textWrap:"nowrap"
          }}
        >
          {str.split("").map((e, i) => (
            <motion.span
              key={`bottom-${i}`}
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{
                delay: speed * i,
                duration: 0.4,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                position: "relative",
                whiteSpace: "pre",
                WebkitBackgroundClip: "text",
                color: "#BF40BF",
              }}
            >
              {e === " " ? "\u00A0" : e}
            </motion.span>
          ))}
        </div>
      </motion.a>
    </Stack>
  );
};

export default AnimatedText;
