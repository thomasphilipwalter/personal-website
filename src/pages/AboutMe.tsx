import { motion } from "framer-motion"

function AboutMe() {
  return (
    <motion.div
      className="bg-gray-100 p-10 flex flex-col lg:flex-row items-start gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src="/Me.png"
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
          About Me
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl">
          Hey! I'm Thomas.
        </p>
        <p className="mt-4 text-lg">
          Currently, I'm building this website to showcase my projects, music, and whatever else I'm up to.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default AboutMe
