import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center py-4 my-instrument">My Question Answer</h1>

      <section class="container categories" id="product">
        <div class="row g-4 my-5">
          <div class="col-md-6 col-lg-6">
            <div class="p-3    border rounded-3 border bg-dark">
              <h5 className="text-light">What is semantic tag?</h5>
              <p>
                Semantic tag is meaningfull element thos that perfectlly describe
                their meaning in human and machine readable.Such as
                section,article,
                footer,aside,header,main,summary,details,nav,figcaption.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-6 text-light">
            <div class="p-3   align-items-center justify-content-between border rounded-3 border bg-dark">
              <h5 className="">What is purpose of context api?</h5>
              <p>
                Without having to pass props down manually at every
                label.Context provides a way to pass data from parent to child
                component.
              </p>
              <li>Create context.</li>
              <li>Wrap parent context provide. </li>
              <li>Provide a value of the context as props.</li>
              <li>Wrap child with context consumer.</li>
              <li>Consumer follows the render props pattern.</li>
            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-md-6 col-lg-12">
            <div class="p-3 border rounded-3 border bg-success">
              <h5 className="text-light text-center">
                Inline VS Block VS Inline-Block?
              </h5>

              <div class="p-3 border rounded-3 border bg-dark text-light d-flex">
                <div>
                  <h4>Inline</h4>
                  <p>All access for padding.</p>
                  <p>
                    Only left & right margin accessable top & bottom margin not
                    accessable.
                  </p>
                  <p>Not accessable Height & Width for element.</p>
                </div>
                <div>
                  <h4>Block</h4>
                  <p>Bound for margin & padding.</p>
                  <p>Others element not accessable left and right.</p>
                  <p>All height & width accessable for element.</p>
                </div>
                <div>
                  <h4>Inline-Block</h4>
                  <p>Can not bound for margin & padding.</p>
                  <p>Others element accessable left and right.</p>
                  <p>All height & width accessable for element.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
