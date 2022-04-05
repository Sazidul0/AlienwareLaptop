
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'


const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className='review-container-title'>
                <h1>Customer Reviews</h1>
            </div>
            <div className='review-container'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;