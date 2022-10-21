import React, { useEffect, useMemo } from 'react';

function About(props) {
    useMemo(() => {
        console.log('componentWillMount');
        // componentWillMount events
    }, []);
    useEffect(() => {
        console.log('about mounted');
    }, []);
    return <div>here is about page</div>;
}

export default About;
