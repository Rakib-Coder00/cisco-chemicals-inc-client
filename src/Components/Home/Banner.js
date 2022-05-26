import React from 'react';
import img1 from '../../Assets/Images/DD2_2048.jpg'
import img2 from '../../Assets/Images/careers.jpg'
import img3 from '../../Assets/Images/index_mv_im03.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }} >
            <div class="hero-overlay bg-opacity-30"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 data-aos='fade-right'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        className="mb-5 text-5xl text-white font-bold">Hello there</h1>
                    <p data-aos='fade-right'
                        data-aos-delay='400'
                        data-aos-duration='900' class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button data-aos='zoom-in'
              data-aos-delay='1300' class="btn text-xl btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    //     <div className='relative'>
    //     <div class='hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16'>
    //       <div class='hero-content flex-col lg:flex-row'>
    //         <div>
    //           <p
    //             data-aos='fade-right'
    //             data-aos-duration='1000'
    //             data-aos-delay='200'
    //             className='text-xl'
    //           >
    //             Best Quality
    //           </p>
    //           <h1
    //             data-aos='fade-right'
    //             data-aos-delay='400'
    //             data-aos-duration='900'
    //             class='text-5xl font-bold'
    //           >
    //             Professional Cleaning Service
    //           </h1>
    //           <p
    //             data-aos='fade-right'
    //             data-aos-delay='600'
    //             data-aos-duration='800'
    //             class='py-6 max-w-xl'
    //           >
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has
    //           </p>
    //           <button
    //             data-aos='zoom-in'
    //             data-aos-delay='1300'
    //             class='btn btn-primary'
    //           >
    //             Get Started
    //           </button>
    //         </div>
    //         <div className='h-[60vh] shrink-0'>
    //           <img src={img1} class='h-full' alt='' />
    //         </div>
    //       </div>
    //     </div>
    //     <div className='rounded-2xl mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-lg p-10 w-5/6'>
    //       <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
    //       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
    //         <input
    //           type='text'
    //           placeholder='Type here'
    //           class='input input-bordered w-full'
    //         />
    //         <input
    //           type='text'
    //           placeholder='Type here'
    //           class='input input-bordered w-full'
    //         />
    //         <input
    //           type='text'
    //           placeholder='Type here'
    //           class='input input-bordered w-full'
    //         />
    //         <input
    //           type='text'
    //           placeholder='Type here'
    //           class='input input-bordered w-full'
    //         />
    //         <input
    //           type='text'
    //           placeholder='Type here'
    //           class='input input-bordered w-full'
    //         />
    //         <input
    //           type='text'
    //           placeholder='Type here'
    //           class='input input-bordered w-full'
    //         />
    //         <input
    //           type='text'
    //           placeholder='Type here'
    //           class='input input-bordered w-full'
    //         />
    //         <input
    //           type='text'
    //           placeholder='Type here'
    //           class='input input-bordered w-full'
    //         />
    //       </div>
    //       <button className='btn btn-primary mt-5'>Get a Quote</button>
    //     </div>
    //   </div>
    );
};

export default Banner;