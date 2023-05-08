import AnchorLink from "react-anchor-link-smooth-scroll"
import Button from "../components/Button"
import { motion } from "framer-motion"

const HomePage = ({ setSelectedPage }) => {
  return (
    <section id="home">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <motion.div onViewportEnter={() => setSelectedPage("home")}>
          <h1 className="text-3xl md:text-6xl mb-4 text-center">
            Jomel Bautista
          </h1>
        </motion.div>
        <div className="text-lg md:text-2xl mb-2">Portfolio</div>
        <div className="font-light text-sm md:w-2/3 text-center mb-4">
          I am a full-stack developer with experience in the MERN Stack and
          focus on the React Framework. I am currently building applications and
          websites for small businesses, organizations, an personal projects. I
          am seeking new opportunities, let's connect!
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <AnchorLink href="#projects">
            <Button secondary>Jump to Projects</Button>
          </AnchorLink>
          <a
            href="/Bautista_Jomel_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            <Button primary>Download Resume</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomePage
