let LoadingReducer = function (state = { isLoading: true }, action) {

    switch (action.type) {
      case "LOADING": {
        return Object.assign({}, state, { isLoading: action.isLoading });
      }
      default: {
        return state;
      }
    }
  };
  
  export default LoadingReducer;