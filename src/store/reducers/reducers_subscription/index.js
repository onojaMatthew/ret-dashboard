import {
  GET_SUBSCRIPTION_PLAN_START,
  GET_SUBSCRIPTION_PLAN_SUCCESS,
  GET_SUBSCRIPTION_PLAN_FAILED,
  SELECT_PLAN_START,
  SELECT_PLAN_SUCCESS,
  SELECT_PLAN_FAILED
} from "../../actions/subscription";

const initialState = {
  plans: [],
  plan: {},
  getPlansLoading: false,
  getPlansSuccess: false,
  selectLoading: false,
  selectSuccess: false,
  selectPlanLoading: false,
  selectPlanSuccess: false,
  error: "",
}

export const plan = (state=initialState, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTION_PLAN_START:
      return {
        ...state,
        getPlansLoading: true,
        getPlansSuccess: false,
      }
    case GET_SUBSCRIPTION_PLAN_SUCCESS:
      return {
        ...state,
        getPlansLoading: false,
        getPlansSuccess: true,
        plans: action.data,
      }
    case GET_SUBSCRIPTION_PLAN_FAILED:
      return {
        ...state,
        getPlansLoading: false,
        getPlansSuccess: false,
        error: action.error
      }
    case SELECT_PLAN_START:
      return {
        ...state,
        selectLoading: true,
        selectPlanSuccess: false,
      }
    case SELECT_PLAN_SUCCESS:
      return {
        ...state,
        selectLoading: false,
        selectPlanSuccess: true,
        plan: action.data,
      }
    case SELECT_PLAN_FAILED:
      return {
        ...state,
        selectLoading: false,
        selectPlanSuccess: false,
        error: action.error
      }
    default:
      return state;
  }
}