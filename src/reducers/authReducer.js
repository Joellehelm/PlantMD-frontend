import * as act from '../actions/actionTypes';

// TODO
// set this up, add login etc
const initialState = {
  user: {}
};

export default function (state = initialState, action) {

  switch (action.type) {
    case act.CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };

    case act.LOGIN:
      console.log('hello are we here?')
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
      console.log(action.payload.user.data.attributes)
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@")
      return {
        ...state,
        user: action.payload.user.data.attributes
      };

    // case act.AUTO_LOGIN:
    //   return {
    //     ...state,
    //     user: action.payload.user
    //   }


    default:
      return state;
  }



}