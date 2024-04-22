import React from "react";
import "./goalList.css";
const GoalList = ({ goals }) => {
  //   goals.map((goal) => console.log(goal.text));
  return (
    <>
      <ul className="goal-list">
        {goals.map((goal) => {
          return <li key={goal.id}> {goal.text}</li>;
        })}
        {/* <li>Have A dream to complete the course this week</li>
        <li>Have A dream to complete the course this week</li>
        <li>Have A dream to complete the course this week</li> */}
      </ul>
    </>
  );
};

export default GoalList;
