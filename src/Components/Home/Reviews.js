import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-40'>
            <h2 className='text-center text-3xl font-bold text-primary'>Our Happy Clients</h2>
            <div className="review grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-14">
                {
                    reviews.map((review) => (
                        <div key={review._id} className="review-box">
                            <div className="review-content box">
                                <FontAwesomeIcon className="fa-left" icon={faQuoteLeft} />
                                <FontAwesomeIcon className="fa-right" icon={faQuoteRight} />
                                <img className='ml-12 lg:ml-44' src={review.avatar} alt="" />
                                <p>{review.name}</p>
                                <div className="stars"> {review.rating === 5 ?
                                    (<div>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>) :
                                    (<div>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarHalf} />
                                    </div>)
                                }
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{review.rating}</span>
                                </div>
                                <p>{review.message}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Reviews;