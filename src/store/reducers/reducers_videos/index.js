import {
  UPLOAD_START,
  UPLOAD_SUCCESS,
  UPLOAD_FAILED,
  GET_VIDEOS_START,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_FAILED,
  POST_VIDEO_START,
  POST_VIDEO_SUCCESS,
  POST_VIDEO_FAILED,
  UPLOAD_POSTER_START,
  UPLOAD_POSTER_SUCCESS,
  UPLOAD_POSTER_FAILED,
  GET_VIDEO_START,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILED,
  RATING_START,
  RATING_SUCCESS,
  RATING_FAILED,
  GET_ALL_START,
  GET_ALL_SUCCESS,
  GET_ALL_FAILED,
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
  LOCAL_SEARCH_START,
  LOCAL_SEARCH_SUCCESS,
  LOCAL_SEARCH_FAILED,
  REVIEW_START,
  REVIEW_SUCCESS,
  REVIEW_FAILED,
} from "../../actions/actions_videos";

const initialState = {
  videos: [],
  all: [],
  video: {},
  uploads: {},
  poster: {},
  search: [],
  localVideos: [],
  reviews: [],
  posterSuccess: false,
  posterLoading: false,
  videoSuccess: false,
  videoLoading: false,
  success: false,
  loading: false,
  allSuccess: false,
  allLoading: false,
  ratingSuccess: false,
  ratingLoading: false,
  searchLoading: false,
  searchSuccess: false,
  reviewLoading: false,
  reviewSuccess: false,
  localSearchLoading: false,
  localSearchSuccess: false,
  error: ""
}

export const video = (state=initialState, action) => {
  switch(action.type) {
    case UPLOAD_START:
      return {
        ...state,
        videoLoading: true,
        videoSuccess: false,
      }
    case UPLOAD_SUCCESS:
      return {
        ...state,
        videoLoading: false,
        videoSuccess: true,
        video: action.data,
      }
    case UPLOAD_FAILED:
      return {
        ...state,
        videoLoading: false,
        videoSuccess: false,
        error: action.error
      }
    case GET_VIDEOS_START:
      return {
        ...state,
        loading: true,
        success: false,
      }
    case GET_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        videos: action.data,
      }
    case GET_VIDEOS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      }
    case POST_VIDEO_START: 
      return {
        ...state,
        loading: true,
        success: false,
      }
    case POST_VIDEO_SUCCESS: 
      return {
        ...state,
        loading: false,
        success: true,
        videos: state.videos.concat(action.data),
      }
    case POST_VIDEO_FAILED: 
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      }
    case UPLOAD_POSTER_START:
      return {
        ...state,
        posterLoading: true,
        posterSuccess: false,
      }
    case UPLOAD_POSTER_SUCCESS:
      return {
        ...state,
        posterLoading: false,
        posterSuccess: true,
        poster: action.data,
      }
    case UPLOAD_POSTER_FAILED:
      return {
        ...state,
        posterLoading: false,
        posterSuccess: false,
        error: action.error
      }
    case GET_VIDEO_START:
      return {
        ...state,
        loading: true,
        success: false,
        video: action.data,
        error: action.error
      }
    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        loading: true,
        success: false,
        video: action.data,
        error: action.error
      }
    case GET_VIDEO_FAILED:
      return {
        ...state,
        loading: true,
        success: false,
        video: action.data,
        error: action.error
      }
    case RATING_START:
      return {
        ...state,
        ratingLoading: true,
        ratingSuccess: false,
      }
    case RATING_SUCCESS:
      return {
        ...state,
        ratingLoading: false,
        ratingSuccess: true,
        video: action.data,
      }
    case RATING_FAILED:
      return {
        ...state,
        ratingLoading: false,
        ratingSuccess: false,
        error: action.error
      }
    case GET_ALL_START:
      return {
        ...state,
        allLoading: true,
        allSuccess: false,
      }
    case GET_ALL_SUCCESS:
      return {
        ...state,
        allLoading: false,
        allSuccess: true,
        all: action.data,
      }
    case GET_ALL_FAILED:
      return {
        ...state,
        allLoading: false,
        allSuccess: false,
        error: action.error
      }
    case SEARCH_START:
      return {
        ...state,
        searchLoading: true,
        searchSuccess: false
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchSuccess: true,
        search: action.data,
      }
    case SEARCH_FAILED:
      return {
        ...state,
        searchLoading: false,
        searchSuccess: false,
        error: action.error
      }
    case LOCAL_SEARCH_START:
      return {
        ...state,
        localSearchLoading: true,
        localSearchSuccess: false,
      }
    case LOCAL_SEARCH_SUCCESS:
      return {
        ...state,
        localSearchLoading: false,
        localSearchSuccess: true,
        localVideos: action.data,
      }
    case LOCAL_SEARCH_FAILED:
      return {
        ...state,
        localSearchLoading: false,
        localSearchSuccess: false,
        error: action.error
      }
    case REVIEW_START:
      return {
        ...state,
        reviewLoading: true,
        reviewSuccess: false,
      }
    case REVIEW_SUCCESS:
      return {
        ...state,
        reviewLoading: false,
        reviewSuccess: true,
        reviews: state.reviews.concat(action.data),
      }
    case REVIEW_FAILED:
      return {
        ...state,
        reviewLoading: false,
        reviewSuccess: false,
        error: action.error
      }
    default:
      return state;
  }
}