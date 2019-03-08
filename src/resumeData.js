const data = {
    name: "Kyle McKee",
    summary: `Polyglot Agile developer with proven experience coaching 
    teams and sustainably delivering value in both enterprise 
    and startup environments.`,
    experience: [
        {
            title: 'We Can Code IT',
            location: 'Cleveland OH',
            position: 'Director of Education',
            start: 'April 2018',
            finish: 'Present',
            description: `Ensuring our online and in-person bootcamp 
            students receive the highest quality software development 
            education that respects Agile principles and XP practices.  
            Servant leader to the instructor teams for our Cleveland, 
            Columbus, and online programs.`
        },
        {
            title: 'AptoBits LLC',
            location: 'Solon, OH',
            position: 'Consultant/Owner',
            start: 'December, 2012',
            finish: 'Present',
            description: `Independent consulting work coaching, mentoring 
            and training developers of all skill levels on Agile principles 
            and XP best practices while pairing and continuously delivering 
            on high visibility projects within the organization. Worked with 
            multiple teams to help them adopt Acceptance Test Driven Development, 
            Test Driven Development, Pair Programming, Continuous Integration 
            and Clean Coding practices. Coached stakeholders, managers and directors on Lean, 
            Agile, and modern management skills.`,
            footnote: `Clients included: LeanDog, Sherwin Williams, Rockwell Automation, 
            Medical Mutual of Ohio, Asurint.`
        },
        {
            title: 'We Can Code IT',
            location: 'Cleveland, OH',
            position: 'Sr. Software Dev. Instructor',
            start: 'October 2017',
            finish: 'April 2018',
            description: `Part-time position educating and training adult 
            students in C#, OOP, MVC (ASP.NET), TDD, and web development.`
        },
        {
            title: 'Hyland Software',
            location: 'Westlake, OH',
            position: 'Developer',
            start: 'March 2011',
            finish: 'September 2012',
            description: `Part of the team that developed the web-based 
            client that is part of Hyland’s OnBase enterprise content 
            management solution.`
        },
        {
            title: 'SIRVA Relocation',
            location: 'Independence, OH',
            position: 'Developer',
            start: 'February 2009',
            finish: 'March 2011',
            description: `Worked as a Developer on a SCRUM team creating 
            a web based, customer facing workflow application that manages 
            corporate relocations of customer’s employees.`
        },
        {
            title: 'Invacare Corporation',
            location: 'Elyria, OH',
            position: 'CAD Systems Specialist',
            start: 'June 2001',
            finish: 'February 2009',
            description: `Developed a web based system that acts as the 
            primary source of engineering blueprints and their related 
            engineering data used in production plants globally.`
        },
    ],
    education: [
        {
            title: 'Lorain County Community College',
            location: 'Elyria, OH',
            degree: 'AAS',
            start: 'August 2003',
            finish: 'June 2008',
            description: `Graduated with an Associate's of Applied Science in Manufacturing 
                Engineering Technology focused on Mechanical Design.`
        }
    ],
    volunteerWork: [
        {
            title: 'StartupBus 2017',
            position: 'Lead Conductor',
            start: 'March 2017',
            finish: 'September 2017',
            description: `StartupBus is a global community accelerator in the form of a 
            hyper-competitive 5-day entrepreneurial boot-camp. Responsibilities included: 
            fundraising, mentoring, recruiting, planning and execution for the 5 day 
            cross-country bootcamp.`
        },
        {
            title: 'Great Lakes Science Center',
            position: 'Great Science Academy Volunteer',
            start: 'March 2016',
            finish: 'October 2016',
            description: `Great Science Academy is the Great Lakes Science Center's 
            immersive science program for grades 6-9. Designed as a hands-on, fun 
            and challenging learning experience, Great Science Academy brings 
            students together twice a month on Saturdays to explore science, technology, 
            engineering and mathematics.`
        },
        {
            title: 'RailsBridge',
            position: 'Teacher',
            start: 'September 2015',
            description: `RailsBridge workshops are a free and fun way to get started 
            or level up with Rails, Ruby, and other web technologies. The events 
            focus on increasing diversity in tech, so that people of all backgrounds 
            can feel welcome and comfortable in our industry.`
        },
        {
            title: 'GiveCamp',
            position: 'Developer',
            start: '2011, 20115',
            description: `GiveCamp is a weekend-long event where software developers, 
            designers, and database administrators donate their time to create 
            custom software for non-profit organizations.`
        }
    ],
    skills: [
        { name: 'Test Driven Development (London & Chicago styles)', isPrimary: true },
        { name: 'Acceptance Test Driven Development', isPrimary: true },
        { name: 'Agile Coaching', isPrimary: true },
        { name: 'Pair Programming' },
        { name: 'Story Mapping' },
        { name: 'Story Slicing' }, 
        { name: 'Facilitation' }
    ],
    awards: [
        { 
            name: '1st place - Cleveland Medical Hackathon', 
            date: '2015',  
            description: 'The IQ Sensor team set of to measure blood pressure through a compact wearable device that a patient could easily wear on the arm. This device’s flexible sensor mimics a traditional Sphygmomanometer (blood pressure cuff) reporting to an app the patient’s real time blood pressure. The idea was centered on mounting the sensor, along with the electronic components, on the bicep and without the need of an airbag to read the patient’s blood pressure. The five members of the team possessed a mix of industrial, medical and software experience. They included Mike Hoffman (Cleveland Clinic), Kyle Reissner (Rockwell Automation), Kyle McKee (LeanDog), Dr. Morteza Vatani (The University of Akron) and Ryan Jefferis (biomedical engineering grad student from Cornell University).',
            url: 'https://www.cleveland.com/business/2015/09/first_cleveland_medical_hackat_1.html' 
        }
    ],
    languages: [
        { name: 'JavaScript (ES6+)', isPrimary: true },
        { name: 'C#', isPrimary: true },
        { name: 'HTML/CSS', isPrimary: true },
        { name: 'Ruby' },
        { name: 'SQL' },
    ],
    technologies: [
        [
            { name: 'React', isPrimary: true }, 
            { name: 'ASP.NET MVC Core' }
        ],
        [
            { name: 'Jest', isPrimary: true }, 
            { name: 'XUnit', isPrimary: true },
            { name: 'RSpec' }
        ],
        [
            { name: 'SQL Server', isPrimary: true }, 
            { name: 'MongoDB', isPrimary: true },
            { name: 'CouchDB' }
        ],
        [
            { name: 'GIT', isPrimary: true }, 
            { name: 'AWS', isPrimary: true },
            { name: 'Jenkins', isPrimary: true },
            { name: 'Octopus', isPrimary: true },
            { name: 'Kubernetes' },
            { name: 'GCP' },
            { name: 'Azure' }
        ]
    ]
};
export default data;