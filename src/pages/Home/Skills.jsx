import React from 'react';
import uiDesign from '../../../src/assets/ui-design.png'
import websiteDesing from '../../../src/assets/website-design.png'
import appDesing from '../../../src/assets/app-design.png'

const Skills = () => {
    return (
        <div className='mt-20'>
            <div className='text-center mb-5'>
                <h2 className='text-4xl mb-10'>What I do </h2>
                <p className='mb-16'>I am skilled and passionate web developer with experience in crateing visually appealing <br /> and user-friendly website.I have a strong understending of design and a keen eye <br /> for detail.I am proficient in Html,Css and Javascript as well design software such as Adobe Photoshop illustratar.</p>
            </div>
            <div className='space-y-10'>
                <div className='flex  gap-10 p-5 bg-[rgb(50,50,50)] hover:bg-[rgb(70,70,70)] shadow-2xl rounded-xl'>
                    <img className='object-cover h-14 w-14' src={uiDesign} alt="" />
                    <div>
                        <h3 className='text-xl md:text-2xl'>Ui/Ux design</h3>
                        <p>This is a demo text,you can write your own content here</p>
                    </div>
                </div>
                <div className='flex  gap-10 p-5 bg-[rgb(50,50,50)] hover:bg-[rgb(70,70,70)] shadow-2xl rounded-xl'>
                    <img className='h-14 w-14' src={websiteDesing} alt="" />
                    <div>
                        <h3 className='text-xl md:text-2xl'>Ui/Ux design</h3>
                        <p>This is a demo text,you can write your own content here</p>
                    </div>
                </div>
                <div className='flex  gap-10 p-5 bg-[rgb(50,50,50)] hover:bg-[rgb(70,70,70)] shadow-2xl rounded-xl'>
                    <img className='h-14 w-14' src={appDesing} alt="" />
                    <div>
                        <h3 className='text-xl md:text-2xl'>Ui/Ux design</h3>
                        <p>This is a demo text,you can write your own content here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;