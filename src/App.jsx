import React, { useState } from "react";
import GoalList from "./Components/GoalList/GoalList";
import NewGoalList from "./Components/NewGoal/NewGoalList";

const App = () => {
  const [courseGoals, setCourseGoal] = useState([
    { id: "cg1", text: "finish the course asap 1" },
    { id: "cg2", text: "finish the course asap 2 " },
    { id: "cg3", text: "finish the course asap 3 " },
  ]);
  const addNewHandler = (newGoal) => {
    // setCourseGoal(courseGoals.concat(newGoal));
    setCourseGoal((prevSetCourseGoal) => {
      return prevSetCourseGoal.concat(newGoal);
    });
    console.log(courseGoals);
  };
  return (
    <div>
      <h2>Course Goal</h2>
      <NewGoalList onAddGoal={addNewHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
