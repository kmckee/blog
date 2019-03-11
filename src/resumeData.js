const data = {
    name: "Kyle McKee",
    summary: `Polyglot Agile developer with proven experience coaching 
    teams and sustainably delivering value in both enterprise 
    and startup environments.`,
    events: [
        {
            title: 'Director of Education',
            subtitle: 'We Can Code IT',
            color: '#e7276f',
            location: 'Cleveland, OH',
            timePeriod: `2018 - Present`,
            category: 'job',
            body: `Ensuring our online and in-person bootcamp 
            students receive the highest quality software development 
            education that respects Agile principles and XP practices.  
            Servant leader to the instructor teams for our Cleveland, 
            Columbus, and online programs.`
        },
        {
            title: 'Independent Consultant',
            subtitle: 'AptoBits, LLC',
            color: 'rgba(19, 72, 126, 1)',
            location: 'Solon, OH',
            timePeriod: `2012 - Present`,
            category: 'job',
            body: `Independent consulting work coaching, mentoring 
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
            title: 'Sr. Software Dev. Instructor',
            subtitle: 'We Can Code IT',
            color: '#e7276f',
            location: 'Cleveland, OH',
            timePeriod: `2017 - 2018`,
            category: 'job',
            body: `Part-time position educating and training adult 
            students in C#, OOP, MVC (ASP.NET), TDD, and web development.`
        },
        {
            title: 'StartupBus 2017',
            subtitle: 'Lead Conductor',
            timePeriod: '2017',
            category: 'volunteer',
            body: `StartupBus is a global community accelerator in the form of a 
            hyper-competitive 5-day entrepreneurial boot-camp. Responsibilities included: 
            fundraising, mentoring, recruiting, planning and execution for the 5 day 
            cross-country bootcamp.`
        },
        {
            title: 'CodeMash 2.0.1.7 Speaker',
            subtitle: 'Programming Robots with Scratch',
            timePeriod: 'January 2017',
            category: 'speaking',
            body: `Abstract:  Come learn how to program a robot using Scratch! Scratch is a visual 
            programming language developed by the Lifelong Kindergarten Group at the 
            MIT Media Lab. We'll explore how you can drag and drop blocks together to 
            program a robot. We may even sneak a little learning in, too. Please 
            bring a laptop with the Arduino IDE installed and an internet connection 
            if you would like to follow along.`
        },
        {
            title: 'Great Lakes Science Center',
            subtitle: 'Great Science Academy Volunteer',
            timePeriod: '2016',
            category: 'volunteer',
            body: `Great Science Academy is the Great Lakes Science Center's 
            immersive science program for grades 6-9. Designed as a hands-on, fun 
            and challenging learning experience, Great Science Academy brings 
            students together twice a month on Saturdays to explore science, technology, 
            engineering and mathematics.`
        },
        {
            title: 'CodeMash 2.0.1.6 Speaker',
            subtitle: 'Let\'s Build a Hybrid Mobile App!',
            timePeriod: 'January 2016',
            category: 'speaking',
            body: `Abstract: Have you been telling yourself you're going to do mobile, but 
            never got around to it? Wouldn't it be awesome if you could leverage 
            your existing web skills to quickly build native mobile apps? In this 
            workshop we'll do exactly that using Cordova. Cordova is a platform for 
            building native mobile applications using HTML, CSS and JavaScript. 
            By the time you leave this workshop, you'll have built an app that can 
            be deployed to iOs, Android, and just about any other mobile device.`
        },
        { 
            title: 'Cleveland Medical Hackathon', 
            subtitle: '1st Place',
            timePeriod: '2015',  
            category: 'award',
            body: 'The IQ Sensor team set of to measure blood pressure through a compact wearable device that a patient could easily wear on the arm. This device’s flexible sensor mimics a traditional Sphygmomanometer (blood pressure cuff) reporting to an app the patient’s real time blood pressure. The idea was centered on mounting the sensor, along with the electronic components, on the bicep and without the need of an airbag to read the patient’s blood pressure. The five members of the team possessed a mix of industrial, medical and software experience. They included Mike Hoffman (Cleveland Clinic), Kyle Reissner (Rockwell Automation), Kyle McKee (LeanDog), Dr. Morteza Vatani (The University of Akron) and Ryan Jefferis (biomedical engineering grad student from Cornell University).',
            url: 'https://www.cleveland.com/business/2015/09/first_cleveland_medical_hackat_1.html' 
        },
        {
            title: 'RailsBridge Cleveland',
            subtitle: 'Volunteer Teacher',
            timePeriod: 'September 2015',
            category: 'volunteer',
            body: `RailsBridge workshops are a free and fun way to get started 
            or level up with Rails, Ruby, and other web technologies. The events 
            focus on increasing diversity in tech, so that people of all backgrounds 
            can feel welcome and comfortable in our industry.`
        },
        {
            title: 'GiveCamp',
            subtitle: 'Volunteer Developer',
            timePeriod: 'June 2015',
            category: 'volunteer',
            body: `GiveCamp is a weekend-long event where software developers, 
            designers, and database administrators donate their time to create 
            custom software for non-profit organizations.`
        },
        {
            title: 'Developer',
            subtitle: 'Hyland Software',
            color: '#51bc50',
            location: 'Westlake, OH',
            timePeriod: `2011 - 2012`,
            category: 'job',
            body: `Part of the team that developed the web-based 
            client that is part of Hyland’s OnBase enterprise content 
            management solution.`
        },
        {
            title: 'GiveCamp',
            subtitle: 'Volunteer Developer',
            timePeriod: 'June 2011',
            category: 'volunteer',
            body: `GiveCamp is a weekend-long event where software developers, 
            designers, and database administrators donate their time to create 
            custom software for non-profit organizations.`
        },
        {
            title: 'Developer',
            subtitle: 'SIRVA Relocation',
            color: '#828384',
            location: 'Independence, OH',
            timePeriod: `2009 - 2011`,
            category: 'job',
            body: `Worked as a Developer on a SCRUM team creating 
            a web based, customer facing workflow application that manages 
            corporate relocations of customer’s employees.`
        },
        {
            title: 'AAS - Mechanical Design',
            subtitle: 'Lorain County Community College',
            location: 'Elyria, OH',
            timePeriod: '2003 - 2005',
            category: 'education',
            body: `Graduated with an Associate's of Applied Science in 
            Manufacturing Engineering Technology focused on Mechanical Design.`
        },
        {
            title: 'CAD Systems Specialist',
            subtitle: 'Invacare Corporation',
            color: '#0052a1',
            location: 'Elyria, OH',
            timePeriod: `2001 - 2009`,
            category: 'job',
            body: `Developed a web based system that acts as the 
            primary source of engineering blueprints and their related 
            engineering data used in production plants globally.`
        },
    ]
};
export default data;