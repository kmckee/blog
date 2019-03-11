import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
const categoryIcons = {
    'job': {
        icon: '🏭',
        defaultColor: '#333',
    },
    'volunteer': {
        icon: '🎗',
        defaultColor: '#FF9718',
    },
    'speaking': {
        icon: '📣',
        defaultColor: '#E83916',
    },
    'education': {
        icon: '🎓',
        defaultColor: 'rgb(140, 86, 75)',
    },
    'award': {
        icon: '🏆',
        defaultColor: 'rgb(148, 103, 189)',
    },
}
class EventsTimeline extends Component {
    componentDidMount() {
        // I should open a pr add this level of control to npm package...
        document.querySelector('.timeline--wrapper').style.padding = "0 12px";
    }
    render() {
        const {events} = this.props;
        const items = events.map((ev, index) => {
            const {title, subtitle, timePeriod, body, footnote, category} = ev;
            const categoryData = categoryIcons[category];
            const icon = categoryData.icon || '❓';
            const color = ev.color || categoryData.defaultColor;
            
            return (
                <TimelineItem
                    key={index}
                    dateText={`${timePeriod}`}
                    dateInnerStyle={{ background: color, color: '#FFF' }}
                >
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <h3 style={{margin: '0 0 .35em 0'}}>{title}</h3>
                            <h4 style={{margin: '0 0 .35em 0'}}>{subtitle}</h4>
                        </div>
                        <div style={{fontSize: '2rem', lineHeight: '1em', padding: '.1em'}}>
                            {icon}
                        </div>
                    </div>
                    <p style={{marginTop: '1em'}}>{body}</p>
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

export default EventsTimeline;