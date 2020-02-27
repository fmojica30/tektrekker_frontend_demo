import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  students: [
    {
      first_name: "Jack",
      last_name: "Black",
      grades: [
        {
          group: "g1",
          grade: 99
        },
        {
          group: "g3",
          grade: 67
        },
        {
          group: "g2",
          grade: 74
        }
      ]
    },
    {
      first_name: "Nolan",
      last_name: "Ryan",
      grades: [
        {
          group: "g1",
          grade: 79
        },
        {
          group: "g3",
          grade: 87
        },
        {
          group: "g2",
          grade: 94
        }
      ]
    },
    {
      first_name: "Leonardo",
      last_name: "Davinci",
      grades: [
        {
          group: "g1",
          grade: 59
        },
        {
          group: "g3",
          grade: 77
        },
        {
          group: "g2",
          grade: 84
        }
      ]
    }
  ]
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_STUDENT:
      return {
        students: [
          ...state.students,
          {
            first_name: action.payload.first,
            last_name: action.payload.last,
            grades: []
          }
        ]
      };
    case actionTypes.ADD_GRADE:
      const newStudentsList = [];
      for (let i = 0; i < state.students.length; i++) {
        let current = state.students[i];
        if (
          current.first_name === action.payload.first &&
          current.last_name === action.payload.last
        ) {
          const newGrades = [
            ...current.grades,
            { group: action.payload.group, grade: action.payload.grade }
          ];
          const newStudent = {
            first_name: action.payload.first,
            last_name: action.payload.last,
            grades: newGrades
          };
          newStudentsList.push(newStudent);
        } else {
          newStudentsList.push(current);
        }
      }
      return {
        students: newStudentsList
      };
    default:
      return state;
  }
};

export default studentReducer;
