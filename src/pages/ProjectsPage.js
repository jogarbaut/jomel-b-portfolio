import { motion } from "framer-motion"
import ProjectBullet from "../components/ProjectBullet"
import SectionTitle from "../components/SectionTitle"
import { projectData } from "../data/projectData"

const ProjectsPage = ({ setSelectedPage }) => {
  return (
    <section id="projects">
      <motion.div onViewportEnter={() => setSelectedPage("projects")}>
        <SectionTitle>
          <h2 className="text-3xl font-bold my-8">Projects</h2>
          <div className="text-lg mb-8 w-full md:w-2/3 mx-auto">
            Below are several of my featured projects. I have focused most of my
            recent projects on the React framework on the frontend. On the
            backend, my focus has been on MongoDB, Express, and Node.js
            technologies.
          </div>
        </SectionTitle>
      </motion.div>
      <div>
        <div className="mb-4">
          {projectData.map((item) => {
            return <ProjectBullet item={item} key={item.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
