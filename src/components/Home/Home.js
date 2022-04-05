import React from 'react';
import './Home.css';
import laptop1 from '../../images/laptop.png';
import laptop2 from '../../images/laptop-02.png'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Home = () => {

    const [reviews, setReviews] = useReviews();

    reviews.pop();
    reviews.pop();

    console.log(reviews)

    return (
        <div>
            <div className='alienware'>
                <div className='alienware-all-text'>
                    <div className='alienware-text'>
                        <h1>Join with Alienware</h1>
                        <h2> One of the biggest brand in the gaming world</h2>
                        <p>The new Legend 2.0 design is a natural evolution from its iconic geometric beauty and blended bone lines. The new design boasts dark core features, a silky, stain-resistant finish* and customizable AlienFX lighting.Alienware Cryo-Tech™ advancements like Element 31* and HyperEfficient voltage regulation protect thermal conditions for hours, so you have the freedom to game harder and longer.With up to 360Hz refresh rate*, the latest NVIDIA® graphics, you get a richer color range, blazing-fast speeds and uninterrupted graphics.</p>
                        <button>Live Demo</button>
                    </div>
                </div>
                <div className='alienware-image'>
                    <img src={laptop1} alt="" />
                    <img src={laptop2} alt="" />
                </div>
            </div>


            {/* Customers Review */}
            <div className='customer-review-title'>
                <h2>Customer Reviews</h2>
            </div>

            <div>

                <div className='review-container'>
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)

                    }
                </div>
            </div>


            <div className='all-reviews-button'>
                <a href="/reviews">See All Reviews</a>
            </div>
        </div>
    );
};

export default Home;