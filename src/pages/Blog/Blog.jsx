import React from "react";
import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import mainImage from "../../assets/main-blog-image.jpg"; 
import blog1 from "../../assets/blog1.png"; 
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";

const blogData = [
  {
    image: blog1,
    title: "The Future of Bitcoin & Ethereum in 2025",
    content:
      "As we approach 2025, Bitcoin and Ethereum continue to dominate the market. Experts predict new highs, regulations, and massive institutional investments.",
  },
  {
    image: blog2,
    title: "Crypto Myths vs. Reality",
    content:
      "Are cryptocurrencies really anonymous? Do they have no real-world use? This article busts some of the biggest crypto myths and sets the record straight.",
  },
  {
    image: blog3,
    title: "How to Build a Strong Crypto Portfolio",
    content:
      "Building a diversified crypto portfolio requires knowledge and strategy. Learn how to allocate funds wisely and minimize risks in the volatile market.",
  },
  {
    image: blog4,
    title: "Understanding Crypto Security – Avoiding Scams & Hacks",
    content:
      "Crypto scams are on the rise! Learn how to protect yourself from phishing, rug pulls, and fake exchanges with our ultimate security guide.",
  },
  {
    image: blog5,
    title: "The Role of Blockchain Beyond Cryptocurrencies",
    content:
      "Blockchain is transforming industries beyond crypto. From supply chain management to healthcare, discover how blockchain is shaping the future.",
  },
  {
    image: blog6,
    title: "Why NFT Popularity is Rising",
    content:
      "NFTs are revolutionizing digital ownership and art. Explore why they are becoming a multi-billion-dollar industry and what the future holds.",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Blog Posts</h1>

      {/* Main Image */}
      <div className="blog-main-image">
        <img src={mainImage} alt="Blog Main" />
      </div>

      <div className="blog-heading">
        <h2>Overview</h2>
      </div>

      {/* Blog Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="blog-slider"
      >
        {blogData.map((blog, index) => (
          <SwiperSlide key={index} className="blog-slide">
            <img src={blog.image} alt={blog.title} className="blog-slide-image" />
            <div className="blog-slide-content">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
