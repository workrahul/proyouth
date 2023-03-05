import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import TalkingLady from "../../media/talkinglady.png";
import BlogCard from "./blogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      title:
        "How ProYouth Club is Revolutionizing the Professional Development Scene in India ?",
      description:
        "Are you tired of the same old boring professional development programs? Look no further than ProYouth Club! Our programs are designed with young professionals in mind, making them engaging, fun, and practical. Plus, with access to side job and internship opportunities, you'll be well on your way to achieving your career aspirations in no time.",
      cardImg: TalkingLady,
    },
    {
      title:
        "How ProYouth Club is Revolutionizing the Professional Development Scene in India ?",
      description:
        "Are you tired of the same old boring professional development programs? Look no further than ProYouth Club! Our programs are designed with young professionals in mind, making them engaging, fun, and practical. Plus, with access to side job and internship opportunities, you'll be well on your way to achieving your career aspirations in no time.",
      cardImg: TalkingLady,
    },
    {
      title:
        "How ProYouth Club is Revolutionizing the Professional Development Scene in India ?",
      description:
        "Are you tired of the same old boring professional development programs? Look no further than ProYouth Club! Our programs are designed with young professionals in mind, making them engaging, fun, and practical. Plus, with access to side job and internship opportunities, you'll be well on your way to achieving your career aspirations in no time.",
      cardImg: TalkingLady,
    },
    {
      title:
        "How ProYouth Club is Revolutionizing the Professional Development Scene in India ?",
      description:
        "Are you tired of the same old boring professional development programs? Look no further than ProYouth Club! Our programs are designed with young professionals in mind, making them engaging, fun, and practical. Plus, with access to side job and internship opportunities, you'll be well on your way to achieving your career aspirations in no time.",
      cardImg: TalkingLady,
    },
    {
      title:
        "How ProYouth Club is Revolutionizing the Professional Development Scene in India ?",
      description:
        "Are you tired of the same old boring professional development programs? Look no further than ProYouth Club! Our programs are designed with young professionals in mind, making them engaging, fun, and practical. Plus, with access to side job and internship opportunities, you'll be well on your way to achieving your career aspirations in no time.",
      cardImg: TalkingLady,
    },
  ]);
  return (
    <div>
      <div
        style={{
          backgroundColor: "#010517",
        }}
      >
        <Navbar />
      </div>
      <div>
        <h1
          style={{
            margin: "2rem 4rem",
            fontWeight: "600",
            fontSize: "72px",
            lineHeight: "108px",
          }}
        >
          Blogs
        </h1>
        <div>
          {blogs.map((blog) => (
            <BlogCard
              title={blog.title}
              description={blog.description}
              cardImg={blog.cardImg}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
