import React from 'react';

import Layout from '../components/layout';
import Social from '../components/social';
import Experience from '../components/resume/experience';
import Education from '../components/resume/education';
import Volunteer from '../components/resume/volunteer';
import EmphasizedList from '../components/resume/emphasizedList';
import Award from '../components/resume/award';

import resume from '../resumeData';

const AboutPage = ({data, location}) => {
    const social = data.site.siteMetadata.social;
    const experience = resume.experience.map(xp => <Experience key={xp.title + xp.position} {...xp}/>);
    const education = resume.education.map(ed => <Education key={ed.degree} {...ed}/>);
    const volunteer = resume.volunteerWork.map(v => <Volunteer key={v.title + v.start} {...v}/>);
    const award = resume.awards.map(a => <Award key={a.name + a.date} {...a}/>);
    const technology = resume.technologies.map((t, index) => <EmphasizedList key={index} items={t} />);
    return (
        <Layout location={location} title={resume.name}>
            <header>
                <p>{resume.summary}</p>
                <address>
                    Contact Me
                    <Social {...social} />
                </address>
            </header>
            <main>
                <section>
                    <h2>Experience</h2>
                    {experience}
                </section>

                <section>
                    <h2>Education</h2>
                    {education}
                </section>

                <section>
                    <h2>Volunteer Work</h2>
                    {volunteer}
                </section>

                <section>
                    <h2>Skills</h2>
                    <EmphasizedList items={resume.skills} />
                </section>

                <section>
                    <h2>Awards</h2>
                    {award}
                </section>

                <section>
                    <h2>Languages</h2>
                    <EmphasizedList items={resume.languages} />
                </section>

                <section>
                    <h2>Technologies</h2>
                    {technology}
                </section>

            </main>
        </Layout>
    );
};

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter,
          github,
          linkedin
        }
      }
    }
  }
`
