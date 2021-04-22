import { localAuth } from "../../../helper/authenticate";

export const UPLOAD_START = "UPLOAD_START";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_FAILED = "UPLOAD_FAILED";

export const GET_VIDEOS_START = "GET_VIDEOS_START";
export const GET_VIDEOS_SUCCESS = "GET_VIDEOS_SUCCESS";
export const GET_VIDEOS_FAILED = "GET_VIDEOS_FAILED";

export const GET_ALL_START = "GET_ALL_START";
export const GET_ALL_SUCCESS = "GET_ALL_SUCCESS";
export const GET_ALL_FAILED = "GET_ALL_FAILED";

export const GET_VIDEO_START = "GET_VIDEO_START";
export const GET_VIDEO_SUCCESS = "GET_VIDEO_SUCCESS";
export const GET_VIDEO_FAILED = "GET_VIDEO_FAILED";

export const POST_VIDEO_START = "POST_VIDEO_START";
export const POST_VIDEO_SUCCESS = "POST_VIDEO_SUCCESS";
export const POST_VIDEO_FAILED = "POST_VIDEO_FAILED";

export const UPLOAD_POSTER_START = "UPLOAD_POSTER_START";
export const UPLOAD_POSTER_SUCCESS = "UPLOAD_POSTER_SUCCESS";
export const UPLOAD_POSTER_FAILED = "UPLOAD_POSTER_FAILED";

export const RATING_START = "RATING_START";
export const RATING_SUCCESS = "RATING_SUCCESS";
export const RATING_FAILED = "RATING_FAILED";

export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILED = "SEARCH_FAILED";

export const LOCAL_SEARCH_START = "LOCAL_SEARCH_START";
export const LOCAL_SEARCH_SUCCESS = "LOCAL_SEARCH_SUCCESS";
export const LOCAL_SEARCH_FAILED = "LOCAL_SEARCH_FAILED";

export const REVIEW_START = "REVIEW_START";
export const REVIEW_SUCCESS = "REVIEW_SUCCESS";
export const REVIEW_FAILED = "REVIEW_FAILED";

const VIDEO_SERVICE_API= process.env.REACT_APP_VIDEO_SERVICE_API;
const token = localAuth().authorization && localAuth().authorization;

export const uploadStart = () => {
  return {
    type: UPLOAD_START
  }
}

export const uploadSuccess = (data) => {
  return {
    type: UPLOAD_SUCCESS,
    data
  }
}

export const uploadFailed = (error) => {
  return {
    type: UPLOAD_FAILED,
    error
  }
}

export const videoUploader = (data) => {
  const formData = new FormData();

  formData.append('file', data);
  // replace this with your upload preset name
  formData.append('upload_preset', "gare-upload-preset");

  const options = {
    method: 'POST',
    body: formData,
  };

  return dispatch => {
    dispatch(uploadStart());
    fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/video/upload`, options)
    .then(response => response.json())
    .then(resp => {
      dispatch(uploadSuccess(resp));
    })
    .catch(err => {
      dispatch(uploadFailed(err));
    });
  }
}

// ======================VIDEO POSTER UPLOADER============================
export const uploadPosterStart = () => {
  return {
    type: UPLOAD_POSTER_START
  }
}

export const uploadPosterSuccess = (data) => {
  return {
    type: UPLOAD_POSTER_SUCCESS,
    data
  }
}

export const uploadPosterFailed = (error) => {
  return {
    type: UPLOAD_POSTER_FAILED,
    error
  }
}

export const posterUploader = (data) => {
  const formData = new FormData();

  formData.append('file', data);
  // replace this with your upload preset name
  formData.append('upload_preset', "gare-upload-preset");

  const options = {
    method: 'POST',
    body: formData,
  };

  return dispatch => {
    dispatch(uploadPosterStart());
    fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`, options)
    .then(response => response.json())
    .then(resp => {
      if (resp.error) return dispatch(uploadPosterFailed(resp.errorr))
      dispatch(uploadPosterSuccess(resp));
    })
    .catch(err => {
      dispatch(uploadPosterFailed(err));
    });
  }
}
// ============

export const getVideosStart = () => {
  return {
    type: GET_VIDEOS_START
  }
}

export const getVideosSuccess = (data) => {
  return {
    type: GET_VIDEOS_SUCCESS,
    data
  }
}

export const getVideosFailed = (error) => {
  return {
    type: GET_VIDEOS_FAILED,
    error
  }
}

export const getVideos = (data) => {
  return dispatch => {
    dispatch(getVideosStart());
    fetch(`https://video-ret.ieapis.com/api/v1/video/all?page=${data.page}&category=${data.category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.error) return dispatch(getVideosFailed(resp.message));
        dispatch(getVideosSuccess(resp.results.data));
      })
      .catch(err => {
        dispatch(getVideosFailed(err.message));
      });
  }
}

export const getVideoStart = () => {
  return {
    type: GET_VIDEO_START
  }
}

export const getVideoSuccess = (data) => {
  return {
    type: GET_VIDEO_SUCCESS,
    data
  }
}

export const getVideoFailed = (error) => {
  return {
    type: GET_VIDEO_FAILED,
    error
  }
}

export const getVideo = (id) => {
  return dispatch => {
    dispatch(getVideoStart());
    fetch(`${VIDEO_SERVICE_API}/video/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.error) return dispatch(getVideoFailed(resp.message));
        dispatch(getVideoSuccess(resp.results.data));
      })
      .catch(err => {
        dispatch(getVideoFailed(err.message));
      });
  }
}

export const postStart = () => {
  return {
    type: POST_VIDEO_START
  }
}

export const postSuccess = (data) => {
  return {
    type: POST_VIDEO_SUCCESS,
    data
  }
}

export const postFailed = (error) => {
  return {
    type: POST_VIDEO_FAILED,
    error
  }
}

export const postVideo = (data) => {
  return dispatch => {
    dispatch(postStart());
    fetch(`${VIDEO_SERVICE_API}/video/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response  => response.json())
      .then(resp => {
        if (resp.error) return dispatch(postFailed(resp.message));
        dispatch(postSuccess(resp.results.data));
      })
      .catch(err => {
        dispatch(postFailed(err.message));
      })
  }
}

export const ratingStart = () => {
  return {
    type: RATING_START
  }
}

export const ratingSuccess = (data) => {
  return {
    type: RATING_SUCCESS,
    data
  }
}

export const ratingFailed = (error) => {
  return {
    type: RATING_FAILED,
    error
  }
}

export const handleRating = (data) => {
  return dispatch => {
    dispatch(ratingStart());
    fetch(`${VIDEO_SERVICE_API}/video/rating`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        console.log(resp, " this  is the rating response");

        if (resp.error) return dispatch(ratingFailed(resp.results.message));
        dispatch(ratingSuccess(resp.results.data));
      })
      .catch(err => {
        console.log(err)
        dispatch(ratingFailed(`Unknown Server Error`));
      });
  }
}

export const getAllStart = () => {
  return {
    type: GET_ALL_START
  }
}

export const getAllSuccess = (data) => {
  return {
    type: GET_ALL_SUCCESS,
    data
  }
}

export const getAllfailed = (error) => {
  return {
    type: GET_ALL_FAILED,
    error
  }
}

export const getAll = (data) => {
  return dispatch => {
    dispatch(getAllStart());
    fetch(`${VIDEO_SERVICE_API}/video/all_videos?page=${data && data.page ? data.page: ""}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.error) return dispatch(getAllfailed(resp.results.message));
        dispatch(getAllSuccess(resp.results.data));
      })
      .catch(err => {
        dispatch(getAllfailed(`Internal Server Error. Refresh your browser and try again`));
      });
  }
}

export const searchStart = () => {
  return {
    type: SEARCH_START
  }
}

export const searchSuccess = (data) => {
  return {
    type: SEARCH_SUCCESS,
    data
  }
}

export const searchFailed = (error) => {
  return {
    type: SEARCH_FAILED,
    error
  }
}

export const search = (data) => {
  return dispatch => {
    dispatch(searchStart());
    fetch(`${VIDEO_SERVICE_API}/search/get?searchTerm=${data.searchTerm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.error) return dispatch(searchFailed(resp.results.message));
        dispatch(searchSuccess(resp.results.data));
      })
      .catch(err => {
        dispatch(searchFailed(`Unknown Server Error ${err}`));
      });
  }
}

export const localSearchStart = () => {
  return {
    type: LOCAL_SEARCH_START
  }
}

export const localSearchSuccess = (data) => {
  return {
    type: LOCAL_SEARCH_SUCCESS,
    data
  }
}

export const localSearchFailed = (error) => {
  return {
    type: LOCAL_SEARCH_FAILED,
    error
  }
}

export const localSearch = (data) => {
  return dispatch => {
    dispatch(localSearchStart());
    fetch(`${VIDEO_SERVICE_API}/search?searchTerm=${data.searchTerm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.error) return dispatch(localSearchFailed(resp.error));
        dispatch(localSearchSuccess(resp.results.data));
      })
      .catch(err => {
        return dispatch(localSearchFailed(`Internal Server Error. ${err.message}`));
      });
  }
}

export const reviewStart = () => {
  return {
    type: REVIEW_START
  }
}

export const reviewSuccess = (data) => {
  return {
    type: REVIEW_SUCCESS,
    data
  }
}

export const reviewFailed = (error) => {
  return {
    type: REVIEW_FAILED,
    error
  }
}

export const review = (data) => {
  return dispatch => {
    dispatch(reviewStart());
    fetch(`${VIDEO_SERVICE_API}/video/review`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ACCEPT: "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.error) return dispatch(reviewFailed(resp.result.message));
        dispatch(reviewSuccess(resp.results.data));
      })
      .catch(err => {
        return dispatch(reviewFailed(err.message));
      })
  }
}

