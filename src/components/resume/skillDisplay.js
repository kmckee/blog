import React from 'react';
import TagCloud from 'react-wordcloud';
 
const data = [
  { text: "JavaScript", value: 100 },
  { text: "TypeScript", value: 60 },
  { text: "C#", value: 80 },
  { text: "Ruby", value: 50 },
  { text: "Docker", value: 55 },
  { text: "Kubernetes", value: 30 },
  { text: "Microservices", value: 30 },
  { text: "TDD", value: 100 },
  { text: "Jest", value: 30 },
  { text: "XUnit", value: 30 },
  { text: "RSpec", value: 30 },
  { text: "CouchDB", value: 30 },
  { text: "Jenkins", value: 70 },
  { text: "GCP", value: 70 },
  { text: "Git", value: 70 },
  { text: "Octopus", value: 70 },
  { text: "ATDD", value: 100 },
  { text: "Agile", value: 100 },
  { text: "Coaching", value: 60 },
  { text: "Refactoring", value: 20 },
  { text: "Facilitation", value: 20 },
  { text: "Lean", value: 80 },
  { text: "React", value: 30 },
  { text: "AWS", value: 30 },
  { text: "Gatsby", value: 20 },
  { text: "ASP.NET MVC", value: 20 },
  { text: "GCP", value: 25 },
  { text: "Azure", value: 13 },
  { text: "HTML5", value: 28 },
  { text: "Nodejs", value: 28 },
  { text: "Express.js", value: 25 },
  { text: "MongoDB", value: 18 },
  { text: "CSS", value: 20 },
  { text: "SQL Server", value: 20 },
  { text: "Pair Programming", value: 20 },
  { text: "XP", value: 20 },
  { text: "Story Mapping", value: 20 },
  { text: "Slicing", value: 20 }
];

const SimpleCloud = () => 
{
    const options = {
        colors: [
            '#1f77b4',
            '#ff7f0e',
            '#2ca02c',
            '#d62728',
            '#9467bd',
            '#8c564b',
        ],
        enableTooltip: false,
        fontFamily: 'Merriweather Sans, sans-serif',
        fontSizes: [10, 50],
        fontStyle: 'normal',
        fontWeight: 'normal',
        padding: 1,
        rotationAngles: [-90, 90],
        rotations: 3,
        scale: 'sqrt',
        spiral: 'archimedean',
        transitionDuration: 1000,
    };
    return (
        <TagCloud 
            words={data} 
            options={options}
            />
    );
};
export default SimpleCloud;