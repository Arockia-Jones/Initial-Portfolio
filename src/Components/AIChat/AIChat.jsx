import { useState } from "react";
import "./AIChat.css";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const data = {
  Professional: {
    availability:
      "He is currently available for full-time entry-level or junior developer roles and is open to remote or relocation opportunities.",
    experience:
      "He has practical experience building full-stack MERN applications including authentication systems and secure payment integrations.",
    teamwork:
      "He collaborates effectively using Git workflows and structured development practices.",
    strengths:
      "His strengths include clean code architecture, structured debugging and scalable backend thinking."
  },

  Technical: {
    skills:
      "He is skilled in MongoDB, Express.js, React.js and Node.js with JWT authentication and Stripe integration experience.",
    backend:
      "He designs REST APIs with Express middleware, authentication layers and production-ready structure.",
    frontend:
      "He builds responsive React applications using hooks, routing and modular component architecture.",
    tools:
      "He works with Git, GitHub, Postman, VS Code, MongoDB Compass, Stripe Dashboard and Vercel."
  },

 Projects: {
  "MERN E-Commerce Platform":
    "A full-stack MERN e-commerce application built using React, Node.js, Express and MongoDB. It includes JWT authentication, Stripe payment integration, admin dashboard, product management, secure backend verification and real-world deployment.",

  "React Portfolio Website":
    "A modern responsive portfolio website built using React and custom CSS animations. It features gradient UI components, reusable sections, smooth transitions and an interactive Q&A sidebar system.",

  "React E-Commerce Website":
    "A frontend-focused e-commerce website built using React. It includes product listing pages, dynamic routing, cart functionality, reusable components and responsive design principles.",

  "Weather Application":
    "A weather forecasting application built using React and external weather APIs. It fetches real-time weather data, displays temperature, location details and dynamic UI updates based on API responses."
},

  Career: {
    goal:
      "His goal is to grow into a strong full-stack engineer capable of designing scalable production systems.",
    future:
      "He plans to deepen backend scalability and system architecture knowledge."
  },

  Personal: {
    education:
      "He completed B.Tech in Electronics and Communication Engineering.",
    hobbies:
      "He enjoys exploring modern web technologies and improving UI experiences."
  },

  Contact: {
    contact:
      "You can reach him through the portfolio contact section or LinkedIn.",
    resume:
      "His resume highlights MERN expertise, authentication systems and Stripe integration."
  }
};
  const toggleSidebar = () => {
    setOpen(prev => !prev);
    setScreen("categories");
    setSelectedCategory(null);
    setSelectedQuestion(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setScreen("questions");
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setScreen("answer");
  };

  const goBack = () => {
    if (screen === "answer") {
      setScreen("questions");
    } else {
      setScreen("categories");
      setSelectedCategory(null);
    }
  };

  return (
    <>
      {/* Floating Q&A Button */}
      <div className="assistant-trigger" onClick={toggleSidebar}>
        Q&A
      </div>

      {/* Overlay */}
      <div
        className={`assistant-overlay ${open ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div className={`assistant-sidebar ${open ? "open" : ""}`}>

        {/* Floating Particles */}
        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {screen === "categories" && (
          <>
            <h3>What would you like to explore?</h3>
            <div className="vertical-list">
              {Object.keys(data).map((category) => (
                <button
                  key={category}
                  className="list-btn"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </>
        )}

        {screen === "questions" && (
          <>
            <h3>{selectedCategory}</h3>
            <div className="vertical-list">
              {Object.keys(data[selectedCategory]).map((question) => (
                <button
                  key={question}
                  className="list-btn"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>
            <button className="back-btn" onClick={goBack}>
              ← Back
            </button>
          </>
        )}

        {screen === "answer" && (
          <>
            <div className="answer-box">
              {data[selectedCategory][selectedQuestion]}
            </div>
            <button className="back-btn" onClick={goBack}>
              ← Ask Another
            </button>
          </>
        )}
      </div>
    </>
  );
}