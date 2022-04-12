export function loading(show = true) {
    return async function (dispatch) {
      return dispatch({
        type: "LOADING",
        isLoading: show
      });
    };
  }
  
  export function resetLoadingReducer() {
    return function (dispatch) {
      return dispatch({
        type: "LOADING",
        isLoading: false
      });
    };
  }
  