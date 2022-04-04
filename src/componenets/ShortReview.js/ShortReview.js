import React from 'react';
import useReview from '../../hooks/useReview';
import Reviews from '../Reviews/Reviews';

const ShortReview = () => {
          const [reviews,setReview] = useReview();
          const datas =reviews.slice(0,3);


          return (
                    <div>
                              <h1>This is Review</h1>
                        {
                          datas.map(review=><Reviews
                          review={review}
                          key={review.id}
                          
                          ></Reviews>)        

                        }      
                    </div>
          );
};

export default ShortReview;