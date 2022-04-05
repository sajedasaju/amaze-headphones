import { Input } from 'postcss';
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='grid grid-rows-1 bg-red-100 mt-8 container mx-auto rounded-xl py-8 text-xl'>
            <h2 className='text-3xl font-mono text-rose-700 mb-4'>All About <span className='text-4xl font-bold'>Amaze Headphones</span></h2>
            <p>In Amaze Headphone you can see the information about our new launched headphone</p>
            <div className='bg-white mx-12 rounded-xl'>
                <ul className='list-inside list-disc'>
                    <li>In Home you can see the details of the product</li>
                    <li>Next you can see the review given by our valuable customers</li>
                    <li>In dashboard i added some cart from rechart</li>
                    <li>In blog component there contain Q/A section</li>
                </ul>
            </div>


        </div>
    );
};

export default About;