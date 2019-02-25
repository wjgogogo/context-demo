import React from "react";
import {connect} from "./context";


const Student = ({studentName, studentAge, onIncreaseAge}) => {
  return <div>
    <span className="title">Student:</span>
    <ul>
      <li>name: {studentName}</li>
      <li>age: {studentAge}
        <button onClick={onIncreaseAge}>+</button>
      </li>
    </ul>
  </div>;
};

const mapState = state => ({
  studentName: state.name,
  studentAge: state.age,
  onIncreaseAge: state.onIncreaseAge
});
export default connect(mapState)(Student);