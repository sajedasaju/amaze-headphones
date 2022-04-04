import React from 'react';
import './Home.css'
import headphone from '../../Assets/Image/headphone.jpg'

const Home = () => {
    return (
        <div>
            <div className='mt-12 container mx-auto  grid grid-cols-2 gap-5 items-center'>
                <div className='text-left'>
                    <h1 className='text-6xl  font-mono font-bold '>Choose Us...</h1>
                    <h1 className='text-style text-6xl  font-mono font-bold '>And feel the music in your bone</h1>
                    <p className='text-2xl mt-4 '>
                        Say goodbye to that chaos of the outside world and plug into your musical serenity with pur product.Made with a sheer touch of class. Crafted with plush materials, it lets you tune the outer world out with just a click. It offers up to 30 hours of pure audio bliss without the ANC mode and up to 20 hours of serenity with the ANC mode.
                    </p>
                    <button className='demo-btn'>Live Demo</button>
                </div>
                <div className='img-container justify-self-end	'>
                    <img src={headphone} alt="" width='100%' />
                </div>

            </div>

            <div className='mt-12'>
                <h1 className='text-4xl  font-mono font-bold '>Customer Reviews</h1>
            </div>
        </div>
    );
};

export default Home;