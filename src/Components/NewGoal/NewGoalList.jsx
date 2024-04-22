import React, { useState } from "react";

const NewGoalList = (props) => {
  let [enterText, setEnterText] = useState("");
  const handleNewGoal = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Math.random(),
      text: enterText,
    };
    props.onAddGoal(newGoal);
    setEnterText("");
    console.log(newGoal);
  };
  //   get uer input dynamically add in Object
  const textHandler = (event) => {
    setEnterText(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleNewGoal}>
        <input type="text" value={enterText} onChange={textHandler} />
        <button>add New Goal</button>
      </form>
    </div>
  );
};

export default NewGoalList;
