import React from "react";
import { Layout } from "antd";

const Homepage = () => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Header style={{ background: "#fff", padding: 0 }} />
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
          <h1>Welcome to Tek Trakker</h1>
          <br />
          <h2>
            This demo of tek trakker is used to track performance for the 7th
            grade English STAAR exam
          </h2>
          <br />
          <h2>
            There are 3 students with preloaded grades included in this demo, in
            the New Student tab you can add more students
          </h2>
          <br />
          <h2>
            In the New Assignment Tabs you can add in grades and make another
            assignment to include in the calculation
          </h2>
          <br />
          <h2>
            In the class statistics tab there will be data displayed showing the
            predicted scores of the students based on the grades that have been
            entered. All of the teks are divided into 3 different groups based
            on their section and weight on the exam.
          </h2>
        </div>
      </Content>
    </div>
  );
};

export default Homepage;
