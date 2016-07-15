const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  }
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
    }
    default :
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
}


function users (state = initialState, action){
  switch(action.type){
    case AUTH_USER:
      return Object.assign({}, state, {
        isAuthed: true,
        authedId: action.id
      })
  }
}


return {
  ...state,
  isAuthed: true,
  authedId: action.id
}


function users (state, action){
  switch(action.type){
    case AUTH_USER :
      return {
        ...state,
        isAuthed: true,
        authedId: action.id
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: '',
    }
    case FETCHING_USER :
      return {
        ...state,
        isFetching: true,
    }
    case FETCHING_USER_FAILURE :
      return {
        ...state,
        isFetching: false,
        error: action.error,
    }
    case FETCHING_USER_SUCCESS :
      return action.user === null
        ? {
          ...state,
          error: '',
          inFetching: false,
      }
      : {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: {
          info: action.user,
          lastUpdated: action.timestamp
      }
      [action.uid]: user(state[action.uid], action)

    }
    default :
      return state

  }


}




