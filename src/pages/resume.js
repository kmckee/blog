import React from "react"

import Layout from "../components/layout"
import SkillDisplay from "../components/resume/skillDisplay"
import EventsTimeline from "../components/resume/eventTimeline"
import SEO from "../components/seo"
import resumeStyles from "./resume.module.css"

import resume from "../resumeData"

const ResumePage = ({ location }) => {
  return (
    <Layout location={location} title={resume.name}>
      <SEO
        title="Kyle McKee - Agile Coach and Software Developer in Cleveland, OH"
        keywords={[
          `agile coach`,
          `javascript`,
          `react`,
          `Kyle McKee`,
          `cleveland`,
          `consultant`,
          `C#`,
          `developer`,
        ]}
      />
      <header>
        <p>{resume.summary}</p>
      </header>
      <main>
        <section>
          <h2>Skills</h2>
          <SkillDisplay />
        </section>
        <section className={resumeStyles.timeline}>
          <h2>Timeline</h2>
          <EventsTimeline events={resume.events} />
        </section>
      </main>
    </Layout>
  )
}

export default ResumePage
