import { motion } from "framer-motion";

export default function Reveal({ children, width = "fit-content" }) {
  
  return (
    <div style={{ position: "relative", width}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0},
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
          bottom: 4,
          left: 0,
          right: 0,
          background: "rgb(37, 69, 209)",
          zIndex: 40,
        }}
        viewport={{ once: true }}
      />
    </div>
  );
}

