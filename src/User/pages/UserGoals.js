import React from "react";
import "./UserGoals.css";
import Card from "../../Shared/UIElements/Card";
import Input from "../../Shared/FormElements/components/Input";
import Button from "../../Shared/FormElements/components/Button";
import { useState } from "react";
import { VALIDATOR_REQUIRE } from "../../Shared/utils/validators";
import NewTask from "../components/NewTask";
import UserProgress from "./UserProgress";
import { useNavigate } from "react-router-dom";
const UserGoals = ({ addGoal, showTask }) => {
  const [addTask, setAddTask] = useState(false);

  const nav = useNavigate();
  const onAddGoalHandler = (event) => {
    event.preventDefault();
    addGoal({ goalName, startDate, endDate });
    alert("Sucesfully created goal.");
    nav("/u1/progress");
  };
  const addTaskHandler = (event) => {
    event.preventDefault();

    setAddTask(true);
  };
  const [goalName, setGoalName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Card className="goals">
      <h2 className="title"> Create Goal</h2>
      <p>Create your goals to track your progress easier</p>
      <form onSubmit={onAddGoalHandler}>
        <Input
          label="Goal Name"
          type=""
          id="goalname"
          value={goalName}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a goal name."}
          onChange={(e) => setGoalName(e.target.value)}
        />
        <Input
          label="Starting date"
          type="date"
          id="startdate"
          value={startDate}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a date."}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          label="Deadline"
          type="date"
          id="enddate"
          value={endDate}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a date."}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <Button onClick={addTaskHandler}>Add task</Button>
      </form>
      {addTask && <NewTask showTask={showTask} />}
      <Button onClick={onAddGoalHandler}>Add goal </Button>
    </Card>
  );
};
export default UserGoals;
