import React from 'react';
import ResearchCard from './ResearchCard';

const Research = () => {
    return (
        <div id="research" style={{ width: '100Vw', paddingTop: '7em', scrollSnapAlign: 'start', paddingLeft: '2em', paddingRight: '2em' }}>
            <ResearchCard title="Research One" name="Boro NOob" />
            <ResearchCard title="Research Two" name="Choto NOob" />
            <ResearchCard title="Research Three" name="Ultra NOob" />
        </div>
    );
};

export default Research;
