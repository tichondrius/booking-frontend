export const FETCHED_ROOMBYID = 'room/FETCHEDGETBYID';
export const FETCH_ROOM_BYID = 'room/FETCHGETBYID';

export const FetchByID = (roomID) => ({
    type: FETCH_ROOM_BYID,
    roomID
  })
  
  export const FetchedFullFilledByID = (room) => ({
    type: FETCHED_ROOMBYID,
    room
  })
  


  const initialState = {
    room:{
        title: null,
        description: null,
        currentPrice: null
    },
    fetching: false,
    fetched: false,
    errorMessage: null,
  }
  
  const roomReducer = (state = initialState, action = {}) => {
    switch(action.type) {
  
      case FETCH_ROOM_BYID:
        return {
          ...state,
          fetching: true,
        }
        case FETCHED_ROOMBYID:
        console.log(action.room);
        
            return{
                ...state,
                fetching: false,
                fetched: true,
                room : action.room.room
            }
  
     
      default:
        return state;
  
    }
  }
  
  export default roomReducer;
