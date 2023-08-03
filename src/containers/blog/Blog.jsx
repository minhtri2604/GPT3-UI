import React from "react";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-content">
        <div className="gpt__blog-context-color">
          <img src={blog1} />
          <div className="gpt__blog-context-descript">
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <div className='align-bottom'><p>Read Full Article</p></div>
          </div>
        </div>
        <div className="gpt3__blog-content-sub action-padding">
          <div className="gpt__blog-context-color">
            <img src={blog2} />
            <div className="gpt__blog-context-descript">
              <p>Sep 26, 2021</p>
              <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
              <p className>Read Full Article</p>
            </div>
          </div>
          <div className="gpt__blog-context-color">
            <img src={blog3} />
            <div className="gpt__blog-context-descript">
              <p>Sep 26, 2021</p>
              <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="gpt3__blog-content-sub">
          <div className="gpt__blog-context-color">
            <img src={blog4} />
            <div className="gpt__blog-context-descript">
              <p>Sep 26, 2021</p>
              <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
              <p>Read Full Article</p>
            </div>
          </div>
          <div className="gpt__blog-context-color">
            <img width="100%" src={blog5} />

            <div className="gpt__blog-context-descript">
              <p>Sep 26, 2021</p>
              <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
