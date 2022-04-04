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
            <div className='mt-12  grid md:grid-cols-2 gap-5 items-center'>
                <div className='text-left'>
                    <h1 className='text-6xl  font-mono font-bold '>Choose Us...</h1>
                    <h1 className='text-style text-6xl  font-mono font-bold '>And feel the music in your bone</h1>
                    <p className='text-1xl mt-4 '>
                        Say goodbye to that chaos of the outside world and plug into your musical serenity with our product.Made with a sheer touch of class. Crafted with plush materials, it lets you tune the outer world out with just a click. It offers up to 30 hours of pure audio bliss without the ANC mode and up to 20 hours of serenity with the ANC mode.
                    </p>
                    <button className='demo-btn'>Live Demo</button>
                </div>
                <div className='img-container justify-self-end	'>
                    <img src={headphone} alt="" width='100%' />
                </div>

            </div>

            <div className='mt-12'>
                <h1 className='text-4xl  font-mono font-bold '>Customer Reviews ({reviews.length})</h1>
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