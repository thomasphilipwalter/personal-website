import { motion } from "framer-motion"

function Music() {
  return (
    <motion.div
      className="bg-white p-10 flex flex-col lg:flex-row items-start gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src="/Cello.png"
        alt="Thomas Walter"
        className="w-64 h-auto rounded-lg shadow-lg object-cover"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Music
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl">
          {/*Title */}
        </p>
        <div className="mt-4 text-lg space-y-6">
        {/* Text */}
      </div>
      </motion.div>
    </motion.div>
  )
}

export default Music
