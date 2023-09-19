import React from 'react';
import Intro from '../../component/Intro';
import Skills from './Skills';
import Protfolio from '../../component/Protfolio';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <Skills></Skills>
            <Protfolio></Protfolio>
        </div>
    );
};

export default Home;