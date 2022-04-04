import React from 'react';
import './Reviews.css'

const Reviews = (props) => {
          const{name,description,img,ratings} =props.review
          return (
                    <div className='container'>
                             
                        <div className='row'>
                                  <div className='reviews-container d-flex align-items-center bg-dark '>
                                        <div>
                                        <img src={img} alt=""/>  

                                        </div>
                                <div className=''>

                                <p>Name:{name}</p> 
                          
                          <p>Description:{description}</p> 
                          <p>Ratings:{ratings}</p> 
                                </div>



                                  </div>
                        
                                  </div>     
                    </div>
          );
};

export default Reviews;