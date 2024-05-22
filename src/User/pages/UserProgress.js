import React from "react";
import UserGoals from "./UserGoals";
import Card from "../../Shared/UIElements/Card";
import "./UserProgress.css";

const UserProgress = ({ goals, tasks }) => {
  return (
    <Card className="progress">
      <h2>User Goals</h2>
      <div className="progress-goals-grid">
        {goals.map((goal, index) => (
          <Card className="progress-goal" key={index}>
            <h2>Goal: {goal.goalName}</h2>
            <p>Starting date: {goal.startDate}</p>
            <p>Deadline: {goal.endDate}</p>
            <h4>Tasks to complete this goal faster:</h4>
            {tasks.map((task, index) => (
              <div key={index}>
                <p>
                  <strong>Task: </strong>
                  {task.taskName}
                </p>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </Card>
  );
};
export default UserProgress;
