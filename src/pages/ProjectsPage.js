import ProjectBullet from "../components/ProjectBullet"
import SectionTitle from "../components/SectionTitle"
import SubsectionTitle from "../components/SubsectionTitle"
import { projectData } from "../data/projectData"

const ProjectsPage = () => {
  return (
    <section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div>
        <div className="mb-4">
          {projectData.map(item => {
            return <ProjectBullet item={item} key={item.id} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage