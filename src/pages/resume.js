import React from 'react';

import Layout from '../components/layout';
import Experience from '../components/resume/experience';
import Education from '../components/resume/education';
import Volunteer from '../components/resume/volunteer';
import Award from '../components/resume/award';
import SkillDisplay from '../components/resume/skillDisplay';

import resume from '../resumeData';

const ResumePage = ({data, location}) => {
    const experience = resume.experience.map(xp => <Experience key={xp.title + xp.position} {...xp}/>);
    const education = resume.education.map(ed => <Education key={ed.degree} {...ed}/>);
    const volunteer = resume.volunteerWork.map(v => <Volunteer key={v.title + v.start} {...v}/>);
    const award = resume.awards.map(a => <Award key={a.name + a.date} {...a}/>);
    return (
        <Layout location={location} title={resume.name}>
            <header>
                <p>{resume.summary}</p>
            </header>
            <main>
                <section>
                    <h2>Skills</h2>
                    <SkillDisplay />
                </section>
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
                    <h2>Awards</h2>
                    {award}
                </section>

            </main>
        </Layout>
    );
};

export default ResumePage
