import React from "react";
import Card from "../../Shared/UIElements/Card";

const UserWorkouts = ({
  workoutName,
  workoutType,
  numberOfExercise,
  duration,
}) => {
  const style = {
    margin: "7rem auto",
  };
  return (
    <Card className="user-workout" styles={style}>
      <div className="workout-summary">
        <h2>Workout Summary</h2>
        <p>
          <strong>Name:</strong> {workoutName}
        </p>
        <p>
          <strong>Type:</strong> {workoutType}
        </p>
        <p>
          <strong>Number of Exercises:</strong> {numberOfExercise}
        </p>
        <p>
          <strong>Duration:</strong> {duration} minutes
        </p>
      </div>
    </Card>
  );
};
export default UserWorkouts;
