import React from "react";
import {connect} from "./context";


const StudentGender = ({studentGender}) => {
  return <div>
    <span className="title"> StudentGender:</span>
    <ul>
      <li>gender: {studentGender}</li>
    </ul>
  </div>;
};

const mapState = state => ({
  studentGender: state.gender
});
export default connect(mapState)(StudentGender);