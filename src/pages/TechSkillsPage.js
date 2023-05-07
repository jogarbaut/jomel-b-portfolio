import { motion } from "framer-motion"
import Box from "../components/Box"
import SectionTitle from "../components/SectionTitle"
import SubsectionTitle from "../components/SubsectionTitle"
import {
  languagesData,
  frontendData,
  backendData,
  testingData,
  conceptsPatternsData,
  otherData,
} from "../data/techSkillsData"

const TechSkillsPage = ({ setSelectedPage }) => {
  return (
    <section id="techSkills">
      <motion.div onViewportEnter={() => setSelectedPage("techSkills")}>
        <SectionTitle>
          <h2 className="text-3xl font-bold my-8">Tech Skills</h2>
          <div className="text-lg mb-8 w-full md:w-2/3 mx-auto">
            My technical skills, that I continue to build upon, have been gained
            through a combination of coursework and independent studying.
          </div>
        </SectionTitle>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div>
          <SubsectionTitle>Languages</SubsectionTitle>
          <div className="mb-4">
            {languagesData.map((item) => {
              return <Box key={item.id}>{item.language}</Box>
            })}
          </div>
        </div>
        <div>
          <SubsectionTitle>Frontend</SubsectionTitle>
          <div className="mb-4">
            {frontendData.map((item) => {
              return <Box key={item.id}>{item.language}</Box>
            })}
          </div>
        </div>
        <div>
          <SubsectionTitle>Backend</SubsectionTitle>
          <div className="mb-4">
            {backendData.map((item) => {
              return <Box key={item.id}>{item.language}</Box>
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div>
          <SubsectionTitle>Testing</SubsectionTitle>
          <div className="mb-4">
            {testingData.map((item) => {
              return <Box key={item.id}>{item.language}</Box>
            })}
          </div>
        </div>
        <div>
          <SubsectionTitle>Concepts & Patterns</SubsectionTitle>
          <div className="mb-4">
            {conceptsPatternsData.map((item) => {
              return <Box key={item.id}>{item.language}</Box>
            })}
          </div>
        </div>
        <div>
          <SubsectionTitle>Other</SubsectionTitle>
          <div className="mb-4">
            {otherData.map((item) => {
              return <Box key={item.id}>{item.language}</Box>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSkillsPage
