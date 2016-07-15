    // Users

    {
      type: AUTH_USER,
      uid,
    }

    {
      type: UNAUTH_USER,
    }

    {
      type: FETCHING_USER,
    }

    {
      type: FETCHING_USER_FAILURE,
      error: 'Error fetching user',
    }

    {
      type: FETCHING_USER_SUCCESS,
      uid,
      user,
      timestamp
    }

    Ducks

    {
      type: FETCHING_DUCK，
    }
    {
      type: FETCHING_DUCK_ERROR,
      error: 'Error fecting duck'
    }
    {
      type: FETCHING_DUCK_SUCCESS,
      duck,
    }
    {
      type: REMOVE_FETCHING
    }
    {
      type: ADD_DUCK,
      duck,
    }
    {
      type: ADD_MULTIPLE_DUCKS,
      ducks
    }

    //Feed
    {
      type: SETTING_FEED_LISTENER,
    }

    {
      type: SETTING_FEED_LISTENER_ERROR,
      error: 'Error fetching feeds.',
    }
    {
      type: SETTING_FEED_LISTENER_SUCCESS,
      duckIds,
    }
    {
      type: ADD_NEW_DUCK_ID_TO_FEED,
      duckid,
    }
    {
      type: RESET_NEW_DUCKS_AVAILABEL,
    }

    //Listeners
    {
      ADD_LISTENER,
      listenerId,
    }

    //Modal
    {
      type: OPEN_MODAL,
    }
    {
      type: CLOSE_MODAL,
    }
    {
      type: UPDATA_DUCK_TEXT,
      newDuckText,
    }

    {
      type: FETCHING_REPLIES,
    }

    {
      type: FETCHING_REPLIES_ERROR,
      error: 'Error fetching replies',
    }

    {
      type: fetching_replies_success,
      replies,
      duckId,
      lastUpdated: Date.now(),
    }

    {
      type: ADD_REPLY,
      duckId,
      reply,
    }
    {
      type: ADD_REPLY_ERROR,
      error: 'Error adding reply',
    }
    {
      type: REMOVE_REPLY,
      replyId,
    }

    //likeCount

    {
      type: FETCHING_COUNT,
    }
    {
      type: FETCHING_COUNT_ERROR,
      error: 'Error fetching duck\'s like count',
    }
    {
      type: FETCHING_COUNT_SUCCESS,
      duckId,
      count,
    }


