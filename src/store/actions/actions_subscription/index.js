import { localAuth } from "../../../helper/authenticate";

export const GET_SUBSCRIPTION_PLAN_START = "GET_SUBSCRIPTION_PLAN_START";
export const GET_SUBSCRIPTION_PLAN_SUCCESS = "GET_SUBSCRIPTION_PLAN_SUCCESS";
export const GET_SUBSCRIPTION_PLAN_FAILED = "GET_SUBSCRIPTION_PLAN_FAILED";

export const SELECT_PLAN_START = "SELECT_PLAN_START";
export const SELECT_PLAN_SUCCESS = "SELECT_PLAN_SUCCESS";
export const SELECT_PLAN_FAILED = "SELECT_PLAN_FAILED";

export const SUBSCRIPTION_START = "SUBSCRIPTION_START";
export const SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS";
export const SUBSCRIPTION_FAILED = "SUBSCRIPTION_FAILED";

const token = localAuth().authorization && localAuth().authorization;

const BASE_URL = process.env.REACT_APP_AUTH_SERVICE_API

export const getSubscriptionPlanStart = () => {
  return {
    type: GET_SUBSCRIPTION_PLAN_START
  }
}

export const getSubscriptionPlanSuccess = (data) => {
  return {
    type: GET_SUBSCRIPTION_PLAN_SUCCESS,
    data
  }
}

export const getSubscriptionPlanFailed = (error) => {
  return {
    type: GET_SUBSCRIPTION_PLAN_FAILED,
    error
  }
}

export const getSubscriptionPlans = () => {
  return dispatch => {
    dispatch(getSubscriptionPlanStart());
    fetch(`${BASE_URL}/transaction/plan?currency=NGN`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        "authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.errors) return dispatch(getSubscriptionPlanFailed(resp.errors));
        // console.log(resp, " response from action")
        dispatch(getSubscriptionPlanSuccess(resp));
      })
      .catch(err => {
        dispatch(getSubscriptionPlanFailed(err.message));
      })
  }
}

export const selectSubscriptionPlanStart = () => {
  return {
    type: SELECT_PLAN_START
  }
}

export const selectSubscriptionPlanSuccess = (data) => {
  return {
    type: SELECT_PLAN_SUCCESS,
    data
  }
}

export const selectSubscriptionPlanFailed = (error) => {
  return {
    type: SELECT_PLAN_FAILED,
    error
  }
}

export const selectSubscriptionPlan = (data) => {
  return dispatch => {
    dispatch(selectSubscriptionPlanStart());
    fetch(`${BASE_URL}/transaction/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.errors) return dispatch(selectSubscriptionPlanFailed(resp.errors));
        dispatch(selectSubscriptionPlanSuccess(resp));
      })
      .catch(err => {
        dispatch(selectSubscriptionPlanFailed(err.message));
      });
  }
}
