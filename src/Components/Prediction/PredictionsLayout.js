import React from "react";
import Prediction from "./Prediction";
import { Row, Col } from "antd";
import { connect } from "react-redux";

const PredictionsLayout = props => {
  return (
    <Row gutter={[16, 16]}>
      {props.students !== [] ? (
        props.students.students.map(student => {
          return (
            <div key={student.first_name}>
              <Col span={4}>
                <Prediction student={student} />
              </Col>
            </div>
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </Row>
  );
};

const mapStateToProps = state => ({
  students: state.students
});
export default connect(mapStateToProps)(PredictionsLayout);
