import { motion } from "framer-motion"

function AboutMe() {
  return (
    <motion.div
      className="bg-white p-10 flex flex-col lg:flex-row items-start gap-8"
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
        <div className="mt-4 text-lg space-y-6">
        <p>
          I’m a German-American senior at Yale studying computer science. As a software engineer, I've developed 
          firmware for industrial automation, built medical software tools through the Yale School of Medicine, and designed full-stack web applications. 
          My CS interests span computational linguistics, network communication and data exchange in embedded systems, and 
          web development.

        </p>
        <p>
          What draws me to computer science is its versatility; it's a tool that can help solve most real-world problems. 
          From optimizing industrial servo motor communication to writing software that helps 
          clinics visualize patient data, to me programming has always been a means, not an end.

        </p>
        <p>
          Outside of CS, my main interests are playing the cello, painting, hiking, and most recently, knitting. See some of my projects under “Music” and “Art”!
        </p>
      </div>
      </motion.div>
    </motion.div>
  )
}

export default AboutMe
