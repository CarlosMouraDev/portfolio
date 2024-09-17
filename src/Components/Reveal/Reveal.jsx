import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({ children, width = "fit-content" }) {
  
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4, // Correção da propriedade 'bottom'
          left: 0,
          right: 0,
          background: "green",
          zIndex: 20,
        }}
        viewport={{ once: true }}
      />
    </div>
  );
}

