import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";

import Store from "./Store/Store";
import Wrapper from "./Components/Layout/Wrapper";
import NewStudentForm from "./Components/InputForms/NewStudentForm";
import AssignmentWrapper from "./Components/Assignment/Display/AssignmentWrapper";
import PredictionsLayout from "./Components/Prediction/PredictionsLayout";
import Home from "./Components/Layout/Home";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Wrapper>
            <Switch>
              <Route path="/new_assignment" component={AssignmentWrapper} />
              <Route path="/new_student" component={NewStudentForm} />
              <Route path="/class_stats" component={PredictionsLayout} />
              <Route path="/" component={Home} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
