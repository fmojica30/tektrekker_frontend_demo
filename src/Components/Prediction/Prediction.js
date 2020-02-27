import React from "react";
import { Card } from "antd";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Prediction = props => {
  const name = [props.student.first_name, props.student.last_name];
  let group1sum = 0;
  let group2sum = 0;
  let group3sum = 0;

  let group1count = 0;
  let group2count = 0;
  let group3count = 0;

  for (let i in props.student.grades) {
    let current = props.student.grades[i];
    if (current.group === "g1") {
      group1sum += current.grade;
      group1count += 1;
    } else if (current.group === "g2") {
      group2sum += current.grade;
      group2count += 1;
    } else {
      group3sum += current.grade;
      group3count += 1;
    }
  }

  let group1weight, group2weight, group3weight;

  if (group1count !== 0) {
    group1weight = (group1sum / group1count) * 0.2;
  } else {
    group1weight = 0;
  }

  if (group2count !== 0) {
    group2weight = (group2sum / group2count) * 0.425;
  } else {
    group2weight = 0;
  }

  if (group3count !== 0) {
    group3weight = (group3sum / group3count) * 0.375;
  } else {
    group3weight = 0;
  }

  const stat = Math.trunc(group1weight + group2weight + group3weight);

  return (
    <Card title={name.join(" ")} style={{ textAlign: "center" }}>
      <CircularProgressbar
        value={stat}
        text={`${stat}%`}
        styles={buildStyles({
          textSize: "14px",
          pathColor: "#002766",
          textColor: "#002766"
        })}
      />
    </Card>
  );
};

export default Prediction;
