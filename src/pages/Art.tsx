import { motion } from "framer-motion"

function Art() {
  return (
    <motion.div
      className="bg-white p-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        Current and Past Projects
      </motion.h2>
      
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-8 min-w-max px-4">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col items-center space-y-4 min-w-[300px]"
          >
            <img
              src="/northland_sweater.jpg"
              alt="Northland Sweater"
              className="w-80 h-80 rounded-lg shadow-lg object-cover"
            />
            <h3 className="text-xl text-gray-800"><span className="italic">Northland Sweater</span> by PetiteKnit</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col items-center space-y-4 min-w-[300px]"
          >
            <img
              src="/park_street_painting.png"
              alt="Park Street Painting"
              className="w-80 h-80 rounded-lg shadow-lg object-cover"
            />
            <h3 className="text-xl text-gray-800 italic">166 Park Street, New Haven</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col items-center space-y-4 min-w-[300px]"
          >
            <img
              src="/porcelain_sweater.png"
              alt="Porcelain Sweater"
              className="w-80 h-80 rounded-lg shadow-lg object-cover"
            />
            <h3 className="text-xl text-gray-800"><span className="italic">Porcelain Sweater</span> by leKnit (WIP)</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.0 }}
            className="flex flex-col items-center space-y-4 min-w-[300px]"
          >
            <img
              src="/stuart_island_painting.png"
              alt="Stuart Island Painting"
              className="w-80 h-80 rounded-lg shadow-lg object-cover"
            />
            <h3 className="text-xl text-gray-800"><span className="italic">Stuart Island</span> (WIP)</h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Art