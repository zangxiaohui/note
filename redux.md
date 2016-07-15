
    const action = {
        type: 'SUBMIT_USER',
        user
    }


## action creators
The term "action creator" makes sense because it's literally a function which is creating and returning an action.

    function submitUser (user) {
      return {
        type: 'SUBMIT_USER',
        user
      }
    }

## Reducers
As we discussed in the last section, a reducer magically receives the current state and the specific action which was returned from an action creator.

    function reducer (state, action) {
      switch (action.type) {
        case 'SUBMIT_USER' :
          return Object.assign({}, state, {
            user: action.user
            })
      }

    }


1) All state lives in a single state tree
2) An action describles how you want to change the state in response to some event.
3) Reducers receive actions and do the actual implementation of changing the state.

## "dispatch" function

    dispatch(submitUser('Tyler'))

There is a module called 'react-redux' that allows us to connect our components to Redux and the we do, it passes in dispatch as props.
