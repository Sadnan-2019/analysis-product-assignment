import React from 'react';
import useReview from '../../hooks/useReview';
import Reviews from '../Reviews/Reviews';

const Review = () => {

          const [reviews,setReview] = useReview();


          return (
                    <div>
                              <h1>This is Review</h1>
                        {
                          reviews.map(review=><Reviews
                          review={review}
                          key={review.id}
                          
                          ></Reviews>)        

                        }      
                    </div>
          );
};

export default Review;