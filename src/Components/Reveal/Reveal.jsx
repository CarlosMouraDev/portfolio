import { motion } from "framer-motion";

export default function Reveal({ children, width = "fit-content" }) {
  return (
    <div
      style={{ position: "relative", width, overflow: "hidden", zIndex: 100 }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
