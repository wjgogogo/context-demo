import React, {Fragment} from "react";
import Student from "./Student";
import StudentGender from "./StudentGender";

const StudentContainer = () => (
  <Fragment>
    <Student/>
    <StudentGender/>
  </Fragment>
);

export default StudentContainer;

