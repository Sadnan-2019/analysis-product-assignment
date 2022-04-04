import React from 'react';
import useReview from '../../hooks/useReview';
import Reviews from '../Reviews/Reviews';
import "./Review.css"

const Review = () => {

          const [reviews,setReview] = useReview();


          return (
                   <div className='container'>
                              <h1 className='text-center py-4 my-instrument'>All Customer Review</h1>

                             <div className='row'>
                             <div className='review-container ' >
                              {/* <h1>This is Review</h1> */}
                        {
                          reviews.map(review=><Reviews
                          review={review}
                          key={review.id}
                          
                          ></Reviews>)        

                        }      
                    </div>
                             </div>
                   </div>
          );
};

export default Review;