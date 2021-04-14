import {
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../../actions/actions_authentication";

const initialState = {
  account: {},
  loading: false,
  success: false,
  login_success: false,
  login_loading: false,
  error: ""
}

export const authentication = (state=initialState, action) => {
  switch(action.type) {
    case REGISTRATION_START:
      return {
        ...state,
        loading: true,
        success: false,
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        account: action.data,
      }
    case REGISTRATION_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      }
    case LOGIN_START:
      return {
        ...state,
        login_success: false,
        login_loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        login_loading: false,
        login_success: true,
        account: action.data,
      }
    case LOGIN_FAILED:
      return {
        ...state,
        login_success: false,
        login_loading: false,
        error: action.error
      }
    default: 
      return state;
  }
}