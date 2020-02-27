import { combineReducers } from "redux";
import assignmentReducer from "./assignmentReducer";
import assignmentFormReducer from "./assignmentFormReducer";
import navReducer from "./navReducer";
import studentReducer from "./studentReducer";

export default combineReducers({
  assignment: assignmentReducer,
  assignmentForm: assignmentFormReducer,
  nav: navReducer,
  students: studentReducer
});
