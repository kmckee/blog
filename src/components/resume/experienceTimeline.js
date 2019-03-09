import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class ExperienceTimeline extends Component {
    render() {
        const {experiences} = this.props;
        const items = experiences.map((xp, index) => {
            const {company, color, position, start, finish, description, footnote} = xp;
            return (
                <TimelineItem
                    key={index}
                    dateText={`${start} - ${finish}`}
                    dateInnerStyle={{ background: color, color: '#FFF' }}
                >
                    <h3 style={{margin: '0 0 .35em 0'}}>{position}</h3>
                    <h4 style={{margin: '0 0 .35em 0'}}>{company}</h4>
                    <p style={{marginTop: '1em'}}>{description}</p>
                    {footnote ? <p>{footnote}</p> : null}
                </TimelineItem>
            );
        });
        return (
            <Timeline lineColor={'#ddd'}>
                {items}
            </Timeline>
        );
    }
}

export default ExperienceTimeline;