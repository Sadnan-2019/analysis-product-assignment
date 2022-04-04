import React from 'react';
import useReview from '../../hooks/useReview';
import Reviews from '../Reviews/Reviews';
import './ShortReview.css'

const ShortReview = () => {
          const [reviews,setReview] = useReview();
          const datas =reviews.slice(0,3);


          return (
                   <div className='container'>
                             <h1 className='text-center'>Customer Review</h1>
                             <div className='row'>

                             <div className='short-reviews-container'>
                              {/* <h1>This is Review</h1> */}
                        {
                          datas.map(review=><Reviews
                          review={review}
                          key={review.id}
                          
                          ></Reviews>)        

                        }      
                    </div>
                             </div>
                   </div>
          );
};

export default ShortReview;