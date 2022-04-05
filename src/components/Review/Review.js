import React from 'react';
import './Review.css'

const Review = (props) => {
    const { review, name, ratings } = props.review

    return (
        <div className='all-customer-reviews'>

            <h4><small>Review by,</small>  {name}</h4>
            <p>{review}</p>
            <p><b>Rating:</b> {ratings}</p>


        </div>
    );
};

export default Review;