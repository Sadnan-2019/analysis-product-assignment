import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ShortReview from "../ShortReview.js/ShortReview";
import "./Home.css";

const Home = () => {

          let navigate=useNavigate()

          const allReview=()=>{

                    const path=`/review`;
                    navigate(path)
          }
  return (
    <div>
      <div className="container">
        <div className="row  py-5 ">
          <div className="col-lg-6 col-md-6 py-5 ">
            <h1 className="my-instrument">My Music</h1>
            <h1 className="my-drem">My Drem</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              provident dolorum, pariatur ex nemo aperiam in esse soluta iste,
              assumenda quae, ducimus consectetur tempore voluptates quaerat
              libero necessitatibus hic repellat.
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="img-fluid rounded-3"
            />
          </div>
        </div>
        <div></div>
      </div>

      <div>
        <ShortReview></ShortReview>
      </div>

      <div className="align-items-center justify-content-center d-flex p-5">
        {/* <Link className="nav-link active  p-4   " to="/review">
          ALL Reviews
        </Link> */}

        <button className="btn btn-dark text-center p-2" onClick={allReview}>Click all Review</button>
      </div>
      
    </div>
  );
};

export default Home;
