import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Review.css'

const Review = ({ review }) => {
    const { name, picture, rating } = review;
    return (
        <div className='review-background p-4 rounded-lg single-review'>
            <div className='img-area'>
                <img src={picture} alt="" />
            </div>
            <div className="review-text bg-white rounded-xl mt-3 mx-4 py-4">
                <h2>Name: {name}</h2>
                <span>Ratings: </span>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} style={{ color: 'rosybrown' }} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'indianred' }} icon={faStar} />}
                    readonly
                ></Rating>
            </div>
        </div>
    );
};

export default Review;