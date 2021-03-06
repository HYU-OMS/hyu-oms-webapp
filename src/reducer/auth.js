import { SIGN_IN, SIGN_OUT, SELECT_GROUP } from '../action/auth';

const initialState = {
  "jwt": localStorage.getItem("jwt"),
  "group_id": (localStorage.getItem("group_id") !== null) ? parseInt(localStorage.getItem("group_id"), 10) : null,
  "role": (localStorage.getItem("role") !== null) ? parseInt(localStorage.getItem("role"), 10) : null,
  "signup_code": (localStorage.getItem("signup_code") !== null) ? localStorage.getItem("signup_code") : "",
  "api_url": (() => {
    if(process.env.NODE_ENV === 'development') {
      if(Boolean(process.env.REACT_APP_API_URL) === false) {
        return 'http://127.0.0.1:8080';
      }
      else {
        return process.env.REACT_APP_API_URL;
      }
    }
    else {
      if(Boolean(process.env.REACT_APP_API_URL) === false) {
        return 'https://api.hyu-oms.com';
      }
      else {
        return process.env.REACT_APP_API_URL;
      }
    }
  })()
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
        "jwt": action.jwt,
      });

    case SIGN_OUT:
      return Object.assign({}, state, {
        "jwt": null,
        "group_id": null,
        "signup_code": null,
        "role": null
      });

    case SELECT_GROUP:
      return Object.assign({}, state, {
        "group_id": action.group_id,
        "role": action.role,
        "signup_code": action.signup_code
      });

    default:
      return state;
  }
};

export default auth;