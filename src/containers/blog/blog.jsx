import { BCard } from "../../components/imports";
import { Blog1, Blog2, Blog3, Blog4 } from "../../assets/images/imports";
import { BsArrowRight } from "react-icons/bs";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog__container section__padding">
      <div className="blog__container-header">
        <h1>Recent Blogs</h1>
      </div>
      <div className="blog__container-main__blog">
        <div className="blog__container-main__blog-content">
          <div className="blog__container-main__blog-content__top">
            <h3 className="blog__container-main__blog-content__top-header">
              BEST PRACTICES
            </h3>
            <p className="blog__container-main__blog-content__top-subheader">
              In design active temper be uneasy. Thirty for remove plenty
              regard.
            </p>
          </div>
          <div className="blog__container-main__blog-content__bottom">
            <p className="blog__container-main__blog-content__bottom-cta">
              Read More
              <BsArrowRight />
            </p>
          </div>
        </div>
        <div className="blog__container-main__blog-image">
          <img src={Blog1} alt="/" className="" />
        </div>
      </div>
      <div className="blog__container-old__blog">
        <BCard
          text={"Partiality on or continuing particular principles as. "}
          image={Blog2}
        />
        <BCard text={"Village did removed enjoyed explain "} image={Blog3} />{" "}
        <BCard
          text={
            "Wise busy past both park when an ye no. Nay likely her length. "
          }
          image={Blog4}
        />
      </div>
    </div>
  );
};

export default Blog;
