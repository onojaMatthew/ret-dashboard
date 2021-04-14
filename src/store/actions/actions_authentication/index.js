import Auth from "../../../helper/Auth";

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

const BASE_URL = process.env.REACT_APP_AUTH_SERVICE_API;

// Registration redux action types
export const registrationStart = () => {
  return {
    type: REGISTRATION_START
  }
}

export const registrationSuccess = (data) => {
  return {
    type: REGISTRATION_SUCCESS,
    data
  }
}

export const registrationFailed = (error) => {
  return {
    type: REGISTRATION_FAILED,
    error
  }
}

export const registration = (data) => {
  return dispatch => {
    dispatch(registrationStart());
    fetch(`${BASE_URL}/account/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        console.log(resp, " this is the response from the server")
        if (resp.errors) return dispatch(registrationFailed(resp.errors));
        Auth.authenticateUser(JSON.stringify(resp));
        dispatch(registrationSuccess(resp));
      })
      .catch(err => {
        dispatch(registrationFailed(`${err.message}`));
      });
  }
}

// Login redux action type
export const loginStart = () => {
  return {
    type: LOGIN_START
  }
}

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    error
  }
}

export const login = (data) => {
  return dispatch => {
    dispatch(loginStart());
    fetch(`${BASE_URL}/account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.errors) return dispatch(loginFailed(resp.errors));
        Auth.authenticateUser(JSON.stringify(resp));
        dispatch(loginSuccess(resp)); 
      })
      .catch(err => {
        dispatch(loginFailed(`Unknown Server Error`));
      });
  }
}