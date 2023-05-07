import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { CgMail } from "react-icons/cg"
import { motion } from "framer-motion"

const ConnectPage = ({ setSelectedPage }) => {
  const handleClick = (link) => {
    window.open(link, "_blank")
  }

  return (
    <section id="connect">
      <motion.div onViewportEnter={() => setSelectedPage("connect")}>
        <SectionTitle>
          <h2 className="text-3xl font-bold my-8">Connect</h2>
          <div className="text-lg mb-8 w-full md:w-2/3 mx-auto">
            I am currently seeking out entry level developer positions. Please
            reach out if you would like to chat or work on a project together.
          </div>
        </SectionTitle>
      </motion.div>
      <div className="flex gap-8 items-center justify-center">
        <Button
          primary
          onClick={() => {
            handleClick("https://github.com/jomelbautista")
          }}
        >
          <FaGithub className="h-12 w-12" />
        </Button>
        <Button
          primary
          onClick={() => {
            handleClick("https://www.linkedin.com/in/jomelb/")
          }}
        >
          <FaLinkedin className="h-12 w-12" />
        </Button>
        <Button
          primary
          onClick={() => {
            handleClick("mailto:jomelgbautista@gmail.com")
          }}
        >
          <CgMail className="h-12 w-12" />
        </Button>
      </div>
    </section>
  )
}

export default ConnectPage
