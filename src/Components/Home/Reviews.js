import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faQuoteLeft, faQuoteRight, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews);
    useEffect(() => {
      fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='text-center'>Our Happy Clients</h2>
            <div className="review">
                {
                    reviews.map((review) => (
                        <div key={review._id} className="review-box">
                            <div className="review-content box">
                                <FontAwesomeIcon className="fa-left" icon={faQuoteLeft} />
                                <FontAwesomeIcon className="fa-right" icon={faQuoteRight} />
                                <img src={review.avatar} alt="" />
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
                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{review.rating}</span>
                                </div>
                                <p>{review.message}</p>
                                <h3>{review.name}</h3>
                                {/* <span>satisfied client</span> */}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Reviews;