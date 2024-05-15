import "./App.css";
import React from "react";
import MainHeader from "./Shared/Navigation/MainHeader";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Shared/Navigation/MainPage.js/MainPage";
import AuthContext from "./Shared/context/AuthContext";
import { useNavigate } from "react-router-dom";
import NewWorkout from "./User/pages/NewWorkout";

import LoginPage from "./User/pages/LoginPage";
import SignUpPage from "./User/pages/SignUpPage";
import UserWorkout from "./User/pages/UserWorkout";
import UserGoals from "./User/pages/UserGoals";
import UserProgress from "./User/pages/UserProgress";
function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  console.log("test");

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
        <Route path="/:UserId/goals" element={<UserGoals />} />
        <Route path="/:UserId/progress" element={<UserProgress />} />
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
