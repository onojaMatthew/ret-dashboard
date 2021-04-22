import { localAuth } from "../../../helper/authenticate";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
export const USER_DETAILS_START = "USER_DETAILS_START";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAILED = "USER_DETAILS_FAILED";
export const FETCH_ADMIN_START = "FETCH_ADMIN_START";
export const FETCH_ADMIN_SUCCESS = "FETCH_ADMIN_SUCCESS";
export const FETCH_ADMIN_FAILED = "FETCH_ADMIN_FAILED";
export const FETCH_ADMIN_DETAILS_START = "FETCH_ADMIN_DETAILS_START";
export const FETCH_ADMIN_DETAILS_SUCCESS = "FETCH_ADMIN_DETAILS_SUCCESS";
export const FETCH_ADMIN_DETAILS_FAILED = "FETCH_ADMIN_DETAILS_FAILED";
export const FETCH_ADMINS_START = "FETCH_ADMINS_START";
export const FETCH_ADMINS_SUCCESS = "FETCH_ADMINS_SUCCESS";
export const FETCH_ADMINS_FAILED = "FETCH_ADMINS_FAILED";

const BASE_URL = process.env.REACT_APP_AUTH_SERVICE_API;

const token = localAuth().token && localAuth().token;

export const fetchUsersStart = () => {
  return {
    type: FETCH_USERS_START
  }
}

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    data
  }
}

export const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    error
  }
}

export const fetchUsers = (data) => {
  return dispatch => {
    dispatch(fetchUsersStart());
    fetch(`https://auth-ret.ieapis.com/v1/account/?skip=${data.skip}&limit=${data.limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        "authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.errors) return dispatch(fetchUsersFailed(resp.errors));
        return dispatch(fetchUsersSuccess(resp));
      })
      .catch(err => {
        return dispatch(fetchUsersFailed(err.message));
      });
  }
}

export const userDetailsStart = () => {
  return {
    type: USER_DETAILS_START
  }
}

export const userDetailsSuccess = (data) => {
  return {
    type: USER_DETAILS_SUCCESS,
    data
  }
}

export const userDetailsFailed = (error) => {
  return {
    type: USER_DETAILS_FAILED,
    error
  }
}

export const userDetails = (userId) => {
  return dispatch => {
    dispatch(userDetailsStart());
    fetch(`${BASE_URL}/account/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        "authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.errors) return dispatch(userDetailsFailed(resp.errors));
        return dispatch(userDetailsSuccess(resp));
      })
      .catch(err => {
        return dispatch(userDetailsFailed(err.message));
      });
  }
}

export const fetchAdminStart = () => {
  return {
    type: FETCH_ADMIN_START
  }
}

export const fetchAdminSuccess = (data) => {
  return {
    type: FETCH_ADMIN_SUCCESS,
    data
  }
}

export const fetchAdminFailed = (error) => {
  return {
    type: FETCH_ADMIN_FAILED,
    error
  }
}

export const fetchAdmin = () => {
  return dispatch => {
    dispatch(fetchAdminStart());
    fetch(`${BASE_URL}/admin/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        "authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.errors) return dispatch(fetchAdminFailed(resp.errors));
        return dispatch(fetchAdminSuccess(resp));
      })
      .catch(err => {
        return dispatch(fetchAdminFailed(err.message));
      });
  }
}


export const fetchAdminsStart = () => {
  return {
    type: FETCH_ADMINS_START
  }
}

export const fetchAdminsSuccess = (data) => {
  return {
    type: FETCH_ADMINS_SUCCESS,
    data
  }
}

export const fetchAdminsFailed = (error) => {
  return {
    type: FETCH_ADMINS_FAILED,
    error
  }
}

export const fetchAdmins = (data) => {
  return dispatch => {
    dispatch(fetchAdminsStart());
    fetch(`${BASE_URL}/admin/?skip=${data.skip}&limit=${data.limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        "authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.errors) return dispatch(fetchAdminsFailed(resp.errors));
        return dispatch(fetchAdminsSuccess(resp));
      })
      .catch(err => {
        return dispatch(fetchAdminsFailed(err.message));
      });
  }
}