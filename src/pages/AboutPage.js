import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"
import SubsectionTitle from "../components/SubsectionTitle"
import {
  educationData,
  certificateData,
  workExperienceData,
  volunteeringData,
} from "../data/aboutData"
import InfoBullet from "../components/InfoBullet"

const AboutPage = ({ setSelectedPage }) => {
  return (
    <section id="about">
      <motion.div onViewportEnter={() => setSelectedPage("about")}>
        <SectionTitle>
          <h2 className="text-3xl font-bold my-8">About</h2>
          <div className="text-lg mb-8 w-full md:w-2/3 mx-auto">
            My background in engineering has contributed signficantly to my
            attention to detail, persistence as a learner, and willingness to
            ask questions.
          </div>
        </SectionTitle>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <SubsectionTitle>Certficates</SubsectionTitle>
          <div className="mb-4">
            {certificateData.map((item) => {
              return <InfoBullet data={item} key={item.id} />
            })}
          </div>
          <SubsectionTitle>Education</SubsectionTitle>
          <div className="mb-4">
            {educationData.map((item) => {
              return <InfoBullet data={item} key={item.id} />
            })}
          </div>
        </div>
        <div>
          <SubsectionTitle>Work Experience</SubsectionTitle>
          <div className="mb-4">
            {workExperienceData.map((item) => {
              return <InfoBullet data={item} key={item.id} />
            })}
          </div>
          <SubsectionTitle>Volunteering Experience</SubsectionTitle>
          <div className="mb-4">
            {volunteeringData.map((item) => {
              return <InfoBullet data={item} key={item.id} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
