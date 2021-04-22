import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  USER_DETAILS_START,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILED,
  FETCH_ADMIN_START,
  FETCH_ADMIN_SUCCESS,
  FETCH_ADMIN_FAILED,
  FETCH_ADMIN_DETAILS_START,
  FETCH_ADMIN_DETAILS_SUCCESS,
  FETCH_ADMIN_DETAILS_FAILED,
  FETCH_ADMINS_START,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAILED,
} from "../../actions/actions_users";

const initialState = {
  users: [],
  user: {},
  admins: [],
  admin: {},
  userLoading: false,
  userSuccess: false,
  usersLoading: false,
  usersSuccess: false,
  adminLoading: false,
  adminSuccess: false,
  error: ""
}

export const accounts = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        usersLoading: true,
        usersSuccess: false,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersLoading: false,
        usersSuccess: true,
        users: action.data,
      }
    case FETCH_USERS_FAILED:
      return {
        ...state,
        usersLoading: false,
        usersSuccess: false,
        error: action.error
      }
    case USER_DETAILS_START:
      return {
        ...state,
        userLoading: true,
        userSuccess: false,
      }
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        userLoading: false,
        userSuccess: true,
        user: action.data,
      }
    case USER_DETAILS_FAILED:
      return {
        ...state,
        userLoading: false,
        userSuccess: false,
        error: action.error
      }
    case FETCH_ADMIN_START:
      return {
        ...state,
        adminLoading: true,
        adminSuccess: false,
      }
    case FETCH_ADMIN_SUCCESS:
      return {
        ...state,
        adminLoading: false,
        adminSuccess: true,
        admin: action.data,
      }
    case FETCH_ADMIN_FAILED:
      return {
        ...state,
        adminLoading: false,
        adminSuccess: false,
        error: action.error
      }
    case FETCH_ADMIN_DETAILS_START:
      return {
        ...state,
        adminLoading: true,
        adminSuccess: false,
      }
    case FETCH_ADMIN_DETAILS_SUCCESS:
      return {
        ...state,
        adminLoading: false,
        adminSuccess: true,
        admin: action.data,
      }
    case FETCH_ADMIN_DETAILS_FAILED:
      return {
        ...state,
        adminLoading: false,
        adminSuccess: false,
        error: action.error
      }
    case FETCH_ADMINS_START:
      return {
        ...state,
        adminsLoading: false,
        adminsSuccess: false,
      }
    case FETCH_ADMINS_SUCCESS:
      return {
        ...state,
        adminsLoading: false,
        adminsSuccess: true,
        admins: action.data,
      }
    case FETCH_ADMINS_FAILED:
      return {
        ...state,
        adminsLoading: false,
        adminsSuccess: false,
        error: action.error
      }
    default:
      return state;
  }
}