import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Form, Icon, Input, Button, Card } from "antd";

import * as actionTypes from "../../Store/Actions/actionTypes";

const NewStudentForm = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const resetState = () => {
    setFirstName("");
    setLastName("");
  };

  const submitStudentHandler = e => {
    e.preventDefault();
    const studentObject = {
      first: firstName,
      last: lastName
    };
    props.addStudent(studentObject);
    resetState();
  };

  return (
    <Row gutter={[8, 8]} type="flex" style={{ alignItems: "center" }}>
      <Col span={8}></Col>
      <Col span={8}>
        <Card title="New Student" bordered>
          <Form
            className="login-form"
            onSubmit={event => submitStudentHandler(event)}
          >
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="First Name"
              style={{ marginBottom: "30px" }}
              size="large"
              onChange={e => {
                setFirstName(e.target.value);
              }}
              value={firstName}
            />
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Last Name"
              style={{ marginBottom: "30px" }}
              size="large"
              onChange={e => {
                setLastName(e.target.value);
              }}
              value={lastName}
            />
            {firstName === "" || lastName === "" ? (
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
                disabled
              >
                Submit
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
              >
                Submit
              </Button>
            )}
          </Form>
        </Card>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  students: state.students
});

const mapDispatchToProps = dispatch => ({
  addStudent: student =>
    dispatch({ type: actionTypes.ADD_STUDENT, payload: student })
});
export default connect(mapStateToProps, mapDispatchToProps)(NewStudentForm);
