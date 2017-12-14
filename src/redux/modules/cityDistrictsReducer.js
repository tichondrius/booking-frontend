
export const FETCHING_CITIES = 'ciDi/FETCHING_CITIES';
export const FETCHING_CITIES_FAIL = 'ciDi/FETCHING_CITIES_FAIL';
export const FETCHING_CITIES_SUCCESS = 'ciDi/FETCHING_CITIES_SUCCESS';

//#region districts
export const FETCHING_DISTRISCTS = 'ciDi/FETCHING_DISTRISCTS';
export const FETCHING_DISTRISCTS_FAIL = 'ciDi/FETCHING_DISTRISCTS_FAIL';
export const FETCHING_DISTRISCTS_SUCCESS = 'ciDi/FETCHING_DISTRISCTS_SUCCESS';
//#endregion

export const fetchingCities = () => ({
  type: FETCHING_CITIES
});

export const fetchCitiesFail = (errors) => ({
  type: FETCHING_CITIES_FAIL,
  errors,
});

export const fetchCitiesSuccess = (cities) => ({
  type: FETCHING_CITIES_SUCCESS,
  cities,
})   
//#region districts function
export const fetchingDistricts = () => ({
  type: FETCHING_DISTRISCTS
});

export const fetchDistrictsFail = (errors) => ({
  type: FETCHING_DISTRISCTS_FAIL,
  errors,
});

//#endregion
export const fetchDistrictsSuccess = (districts) => ({
  type: FETCHING_DISTRISCTS_SUCCESS,
  districts,
})   
const initialState = {
    cities: {
       cities: [],
      isFetching: false,
      errors: null,
    },
    districts:{
        districts: [],
        isFetching: false,
        errors: null
    }
  }


  const ciDiReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case FETCHING_CITIES: 
          
          return {
            ...state,
            cities: {
            
              cities: [],
              errors: null,
              isFetching: true,
            }
          }
        case FETCHING_CITIES_FAIL:
          return {
            ...state,
            cities: {
            //   ...state.rooms,
              isFetching: false,
              errors: action.errors,
            }
          };
        
        case FETCHING_CITIES_SUCCESS:

          return {
            ...state,
            cities: {
               ...state.cities,
              isFetching: false,
              cities: action.cities,
            },
          };
        

          case FETCHING_DISTRISCTS: 
          
          return {
            ...state,
            districts: {
            
              districts: [],
              errors: null,
              isFetching: true,
            }
          }
        case FETCHING_DISTRISCTS_FAIL:
          return {
            ...state,
            districts: {
            //   ...state.rooms,
              isFetching: false,
              errors: action.errors,
            }
          };
        
        case FETCHING_DISTRISCTS_SUCCESS:

          return {
            ...state,
            districts: {

              isFetching: false,
              districts: action.districts,
            },
          };
     
       
        default:
          return state;
    
      }
  }



  export default ciDiReducer;
  