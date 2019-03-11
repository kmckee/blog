import React from 'react';

import Layout from '../components/layout';
import SkillDisplay from '../components/resume/skillDisplay';
import EventsTimeline from '../components/resume/eventTimeline';
import SEO from "../components/seo"

import resume from '../resumeData';

const ResumePage = ({location}) => {
    return (
        <Layout location={location} title={resume.name}>
            <SEO
            title="Kyle McKee - Agile Coach and Software Developer in Cleveland, OH"
            keywords={[`agile coach`, `javascript`, `react`, `Kyle McKee`, `cleveland`, `consultant`, `C#`, `developer`]}
            />
            <header>
                <p>{resume.summary}</p>
            </header>
            <main>
                <section>
                    <h2>Skills</h2>
                    <SkillDisplay />
                </section>
                <section>
                    <h2>Timeline</h2>
                    <EventsTimeline events={resume.events} />
                </section>
            </main>
        </Layout>
    );
};

export default ResumePage
