import React, { useEffect, useState } from "react";
import Prediction from "./Prediction";
import { Row, Col } from "antd";

import axios from "../../axiosInstance";

const PredictionsLayout = props => {
  const [students, setStudents] = useState([]);

    return (
    <Row gutter={[16, 16]}>
      {students !== [] ? (
        students.map(student => {
          return (
            <div key={student.id}>
              <Col span={4}>
                <Prediction student={student.id} />
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

export default PredictionsLayout;
