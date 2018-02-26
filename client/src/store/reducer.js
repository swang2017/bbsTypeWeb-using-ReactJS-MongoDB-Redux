
const initialState = {
  post:"",
  selectedPostId : null,
  newPostCategory: null,
  newParentPostId: null,
}

const reducer = (state = initialState,action) => {

  if(action.type == "SHOW_SINGLE_POST") {

    return {
      ...state,
      selectedPostId : action.postId,
      newPostCategory : action.postCategory
    }
  }

  if(action.type == "PASS_POST_CATEGORY") {

    return {
      ...state,
      newPostCategory : action.postCategory
    }
  }


  if(action.type ==   "PASS_PARENTPOSTID_REPLYISCLICKED") {

    return {
      ...state,
      newParentPostId : action.postId,
      newPostCategory : action.postCategory
    }
  }

  return state
}

export default reducer
