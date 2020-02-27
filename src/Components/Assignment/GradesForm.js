import { connect } from "react-redux";
import React, { useState } from "react";
import { Table, Icon, InputNumber } from "antd";

import * as actionTypes from "../../Store/Actions/actionTypes";

import AssignmentButton from "./Display/AssignmentButton";

const GradesForm = props => {
  const [grades, setGrades] = useState("");

  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name"
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name"
    },
    {
      title: "Grade",
      dataIndex: "value",
      render: (value, row, index) => {
        return (
          <InputNumber
            id={index}
            onChange={value => changeGradeHandler(value, index)}
            min={0}
            max={100}
            defaultValue={0}
          />
        );
      },
      key: "id"
    }
  ];

  const changeGradeHandler = (value, idx) => {
    // e.preventDefault();
    const newGrade = value;
    const lookup = idx.toString();
    if (grades === "") {
      setGrades([...props.students]);
      setGrades(prevGrades => {
        const newObject = prevGrades[lookup];
        newObject.grade = newGrade;
        return {
          ...prevGrades,
          [lookup]: newObject
        };
      });
    } else {
      setGrades(prevGrades => {
        const newObject = prevGrades[lookup];
        newObject.grade = newGrade;
        return {
          ...prevGrades,
          [lookup]: newObject
        };
      });
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    // console.log(grades);
    const newGrades = Object.values(grades);
    // console.log(newGrades);
    for (let i = 0; i < newGrades.length; i++) {
      let current = newGrades[i];
      let newEntry = {
        first: current.first_name,
        last: current.last_name,
        grade: current.grade,
        group: props.assignment.assignment.tek_choice
      };
      // console.log(newEntry);
      props.addGrade(newEntry);
    }
    props.changeToComplete();
  };

  const source = [...props.students];

  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        {props.students ? (
          <h1 style={{ marginTop: "15px" }}>
            Input Grades for : {props.assignment.assignment.name}
          </h1>
        ) : (
          <Icon type="loading" />
        )}
        {props.students !== [] ? (
          <Table
            dataSource={source}
            columns={columns}
            rowKey="id"
            pagination={false}
          />
        ) : (
          <Table dataSource={null} />
        )}
        <AssignmentButton active={true} />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  assignment: state.assignment,
  assignmentForm: state.assignmentForm,
  students: state.students.students
});

const mapDispatchToProps = dispatch => ({
  changeToComplete: () =>
    dispatch({ type: actionTypes.CHANGE_STEP_TO_COMPLETE }),
  addGrade: data => dispatch({ type: actionTypes.ADD_GRADE, payload: data })
});

export default connect(mapStateToProps, mapDispatchToProps)(GradesForm);
