import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="intro">
        <p>
          Welcome to Task Manager! Our application is designed to help you
          efficiently manage your tasks and stay organized. We believe in
          simplicity and productivity, and our goal is to provide you with the
          tools you need to get things done.
        </p>
        <button className="go-to-tasks-btn" onClick={() => navigate('/tasks')}>
          Go to Tasks ➔
        </button>
      </div>
    </div>
  );
};

export default Home;
