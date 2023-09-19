import React from 'react';
import img from '../../src/assets/bappy.png'
import hireMeImg from '../../src/assets/hireme.png'
const Intro = () => {
    return (
        <div className='h-[calc(100vh - 80px)]'>
            <section className='grid md:grid-cols-2 justify-center items-center gap-10'>
                <div className='col-span-1 space-y-3'>
                    <h4 className='text-2xl'>Hello,</h4>
                    <h2 className='text-3xl md:text-5xl font-bold'>I'm <span className='text-amber-300'>Bappy </span><br /> Web Developer</h2>
                    <p>i am a skilled and passionate web developer with experince in creating visually appealing and user-frinedly website.</p>
                    <button className="btn rounded-3xl">
                        <img className='h-[20px] w-[20px]' src={hireMeImg} alt="" />
                        Hire Me
                    </button>
                </div>
                <div className='col-span-1'>
                    <img src={img} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Intro;