import React from 'react';
import protfolio from '../../src/assets/portfolio-1.png'
import protfolio2 from '../../src/assets/portfolio-2.png'
import protfolio3 from '../../src/assets/portfolio-3.png'
import protfolio4 from '../../src/assets/portfolio-4.png'
import protfolio5 from '../../src/assets/portfolio-5.png'
import protfolio6 from '../../src/assets/portfolio-6.png'

const Protfolio = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h2 className='text-4xl mb-10'>My protfolio</h2>
                <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium dolore culpa impedit aperiam possimus <br /> sunt autem assumenda a, eaque dolorem, provident fuga quod animi! Consequuntur iusto pariatur optio quaerat!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className=' transition duration-400 transform hover:-translate-y-4'>
                    <img className='object-cover' src={protfolio} alt="" />
                </div>
                <div className='relative transition duration-400 transform hover:-translate-y-4'>
                    <img className='object-cover' src={protfolio2} alt="" />
                </div>
                <div className='relative transition duration-400 transform hover:-translate-y-4'>
                    <img className='object-cover' src={protfolio3} alt="" />
                </div>
                <div className='relative transition duration-400 transform hover:-translate-y-4'>
                    <img className='object-cover' src={protfolio4} alt="" />
                </div>
                <div className='relative transition duration-400 transform hover:-translate-y-4'>
                    <img className='object-cover' src={protfolio5} alt="" />
                </div>
                <div className='relative transition duration-400 transform hover:-translate-y-4'>
                    <img className='object-cover' src={protfolio6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Protfolio;