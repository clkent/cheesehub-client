import {
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function cheeseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHEESES_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case FETCH_CHEESES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        chesses: action.chesses
      });
    case FETCH_CHEESES_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
}

//alt to using Object.assign
//return {
//   ...state,
//   cheeses: action.cheeses,
//   loading:false
// };

// if instead of switch case
// if (action.type === FETCH_CHEESES_REQUEST) {
//   return Object.assign({}, state, {
//     loading: true
//   });
// } else if (action.type === FETCH_CHEESES_SUCCESS) {
//   return Object.assign({}, state, {
//     loading: false,
//     error: null,
//     chesses: action.chesses
//   });
// } else if (action.type === FETCH_CHEESES_ERROR) {
//   return Object.assign({}, state, {
//     loading: false,
//     error: action.error
//   });
// }
