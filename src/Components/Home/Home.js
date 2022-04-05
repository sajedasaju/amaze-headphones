import React from 'react';
import './Home.css'
import headphone from '../../Assets/Image/headphone.jpg'
import useReviews from '../../hooks/useReviews';
import { useNavigate } from 'react-router-dom';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    // console.log(reviews)
    return (
        <div className=' container mx-auto'>

            <div className='flex  justify-between gap-8 content-center items-center sm:flex-col md:flex-row mt-10'>
                <div className='sm:order-7 md:order-1 text-left sm:text-center'>
                    <h1 className='text-4xl  font-mono font-bold '>Choose Us...</h1>
                    <h1 className='text-style text-4xl  font-mono font-bold '>And feel the music in your bone</h1>
                    <p>Say goodbye to that chaos of the outside world and plug into your musical serenity with our product.Made with a sheer touch of class. Crafted with plush materials, it lets you tune the outer world out with just a click. It offers up to 30 hours of pure audio bliss without the ANC mode and up to 20 hours of serenity with the ANC mode.</p>
                    <button className='demo-btn'>Live Demo</button>
                </div>
                <div className='shrink sm:order-1 '>
                    <img src={headphone} className='rounded-xl' alt="" />

                </div>

            </div>

            <div className='mt-12'>
                <h1 className='text-4xl  font-mono font-bold '>Customer Reviews...</h1>
                <div className='grid md:grid-cols-3 gap-8 mt-10 '>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }

                </div>
                <button onClick={() => navigate('/reviews')} className='see-all-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;