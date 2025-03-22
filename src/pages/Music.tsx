import { motion } from "framer-motion"

function Music() {
  return (
    <motion.div
      className="bg-white p-10 flex flex-col lg:flex-row items-start gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center">
      <motion.img
        src="/Cello.png"
        alt="Thomas Walter"
        className="w-80 h-auto rounded-lg shadow-lg object-cover"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />

      <motion.iframe
          className="mt-4 w-80 h-44 sm:w-96 sm:h-56 lg:w-[560px] lg:h-[315px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/Lg2E-TxEJ_4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Music
        </h2>
        <div className="mt-4 text-lg space-y-6">
          <p>
            I began with the piano at age four and started playing the cello when I was ten. 
            Over the years, I’ve had the privilege of studying with incredible teachers, including Joachim Woitun, 
            Grabiel Mientka, David Carter (Interlochen Arts Camp), Hayoung Choi (Emanuel Feuermann Conservatory), and 
            currently Professor Ole Akahoshi at the Yale School of Music. I’ve also participated in masterclasses 
            with world-renowned musicians such as Kian Soltani (Music Academy Liechtenstein), Bruno Philippe 
            (Kronberg Academy), and members of the Boston Symphony Orchestra and Berlin Philharmonic Orchestra.
          </p>
          <p>
            At 14, I was accepted into the German National Youth Orchestra (Bundesjugendorchester), 
            which gave me the opportunity to perform across Europe under conductors like Sir Simon Rattle
            and Kirill Petrenko. I’ve played in some of the world’s most prestigious concert halls, including the 
            Berlin Philharmonie, Berlin Konzerthaus, Elbphilharmonie, Philharmonie Luxembourg, Athenaeum Bucharest, and Festspielhaus 
            Baden-Baden. I’ve also performed under the direction of Karina Canellakis, Cristian Mǎcelaru, Joan Falletta, 
            William Boughton, Larry Oh, Elizabeth Askren, and Karin Hendrickson.
          </p>
          <p>
            I have been fortunate to win awards in multiple national and international competitions, including:
            <ul className="list-disc pl-6">
              <li><b>1st Prize</b> – Neumann Foundation Scholarship Competition (€3,500 stipend)</li>
              <li><b>2nd Prize</b> – German National Youth Music Competition (Jugend Musiziert)</li>
              <li><b>1st Prize</b> – Hesse State Youth Music Competition</li>
              <li><b>1st Prize</b> – Frankfurt Regional Youth Music Competition</li>
              <li><b>1st Prize</b> – Grand Prize Virtuoso Competitions (Salzburg and Austria)</li>
              <li><b>1st Prize</b> – Lunigiana International Music Festival Concerto Competition</li>
              <li><b>Finalist</b> – William Waite Concerto Competition</li>
              <li><b>Finalist</b> – Interlochen Concerto Competition</li>
              <li><b>Winner</b> – Interlochen Fine Arts Award</li>
            </ul>
          </p>
          <p>
            As a soloist, I’ve performed with the Bad Homburg Chamber Orchestra, the Frankfurt International School 
            Orchestra, and Orchestra Le Metamorfosi. After winning the Lunigiana International Music Festival 
            Concerto Competition, I was invited as a guest artist at the Turin International Chamber Music Festival.
          </p>
          <p>
            Though I’m currently pursuing a Bachelor of Science in Computer Science at Yale University, 
            music remains a core part of my life. I am a principal cellist of the Yale Symphony Orchestra, 
            regularly perform chamber music with friends, and have played in the pit orchestra for multiple Yale 
            musical productions.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Music
