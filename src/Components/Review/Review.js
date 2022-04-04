import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    console.log(review)
    const { name, picture, rating } = review;
    return (
        <div className='review-background p-4 rounded-lg single-review'>
            <div className='img-area'>
                <img src={picture} alt="" />
            </div>
            <div className="review-text bg-white rounded-xl mt-3 mx-4">
                <h2>Name: {name}</h2>
                <span>Ratings: {rating}</span>
            </div>
        </div>
    );
};

export default Review;