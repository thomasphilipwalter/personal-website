import { motion } from "framer-motion"

function AboutMe() {
  return (
    <div>
        <motion.div
            className="bg-white p-10 flex flex-row lg:flex-row items-start gap-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >   
            <div>
                <h2 className="text-3xl font-bold mb-4">
                    About Me
                </h2>
                <p className="text-lg leading-relaxed max-w-2xl">
                    Hey! I'm Thomas.
                </p>
                <div className="mt-4 text-lg space-y-6">
                    <p>
                        I’m a German-American senior at Yale studying computer science. As a 
                        software engineer and data analyst, I’ve developed firmware for industrial 
                        systems, built medical research software with the Yale School of Medicine, and designed full-stack web 
                        applications for startups, research groups, and personal projects. My work spans AI automation, 
                        embedded systems, network communication, data pipelines, and human-in-the-loop AI workflows 
                        that help teams work more efficiently.
                    </p>
                    <p>
                        What drew me to computer science is its versatility. I value having a 
                        toolset that lets me contribute to solving real-world problems across many 
                        fields. Check out my resume, GitHub, and LinkedIn below.
                    </p>
                    <p>
                        Outside of CS, my main interests are playing the cello, painting, 
                        hiking — anything creative or in nature. I’ve performed internationally 
                        with the German National Youth Orchestra, Yale Symphony Orchestra, and at 
                        festivals in Europe and the U.S. See some of my projects under “Music” and 
                        “Art”!
                    </p>
                </div>
            </div>
        </motion.div>

        <motion.div
            className="bg-white p-10 flex flex-row lg:flex-row items-start gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.img
                src="/Me-Sandy.png"
                alt="Thomas Walter"
                className="w-64 h-auto rounded-lg shadow-lg object-cover"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />
            <motion.img
                className="w-64 h-auto rounded-lg shadow-lg object-cover"
                src="/Me-Iceland.png"
                alt="Thomas Walter"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />
        </motion.div>
    </div>
  )
}

export default AboutMe
