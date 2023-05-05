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

const AboutPage = () => {
  return (
    <section id="about">
      <SectionTitle>About</SectionTitle>
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <SubsectionTitle>Education</SubsectionTitle>
          <div className="mb-4">
            {educationData.map((item) => {
              return <InfoBullet data={item} key={item.id}/>
            })}
          </div>
          <SubsectionTitle>Certficates</SubsectionTitle>
          <div className="mb-4">
            {certificateData.map((item) => {
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
