import "./App.css";
import React, { useState } from "react";
import MainHeader from "./Shared/Navigation/MainHeader";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Shared/Navigation/MainPage.js/MainPage";
import AuthContext from "./Shared/context/AuthContext";
import { useNavigate } from "react-router-dom";
import NewWorkout from "./User/pages/NewWorkout";
import goalContext from "./Shared/context/goalContext";
import LoginPage from "./User/pages/LoginPage";
import SignUpPage from "./User/pages/SignUpPage";
import UserWorkout from "./User/pages/UserWorkout";
import UserGoals from "./User/pages/UserGoals";
import UserProgress from "./User/pages/UserProgress";
import NewTask from "./User/components/NewTask";
function App() {
  const [goals, setGoal] = useState([]);
  const [tasks, setTask] = useState([]);
  const addGoal = (goal) => {
    setGoal((prevGoals) => [...prevGoals, goal]);
  };
  const showTask = (task) => {
    setTask((prevTask) => [...prevTask, task]);
  };
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = React.useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = React.useCallback(() => {
    setIsLoggedIn(false);
    navigate("/");
  }, [navigate]);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/workouts/new" element={<NewWorkout />} />
        <Route path="/:UserId/workouts" element={<UserWorkout />} />
        <Route
          path="/:UserId/goals"
          element={<UserGoals addGoal={addGoal} showTask={showTask} />}
        />
        <Route
          path="/:UserId/progress"
          element={<UserProgress goals={goals} tasks={tasks} />}
        />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <MainHeader />

      <main>{routes}</main>
    </AuthContext.Provider>
  );
}

export default App;
