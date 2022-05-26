import React from 'react';
import person from '../Assets/Images/person.png';

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200 ">
            <div class="hero-content flex-col lg:flex-row shadow-2xl">
                <img src={person} alt='person'/>
                <div>
                    <h1 class="text-5xl font-bold"><span className='text-2xl'>Hi there 👋 </span></h1>
                    <p class="py-4"><span className='font-bold mr-2'>Name:</span>Rakib Hassan</p>
                    <p class="py-4"><span className='font-bold mr-2'>Email:</span>rakibdev00@gmail.com</p>
                    <p class="py-4"><span className='font-bold mr-2'>Education:</span>B.S.C Degree, Govt. BL College,Khulna</p>
                    <p class="py-4"><span className='font-bold mr-2'>Address:</span>Dowlotpur,Khulna</p>
                    <p class="py-4"><span className='font-bold mr-2'>Skills:</span>HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, <br /> Nodejs, React, MongoDB</p>
                    <p class="py-4"><span className='font-bold mr-2'>Project:</span></p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;