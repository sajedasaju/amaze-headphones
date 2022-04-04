import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = ({ review }) => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-8 mt-10 container mx-auto'>

                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;