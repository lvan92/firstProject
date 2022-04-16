export function add(user) {
    return async function (dispatch) {
      return dispatch({
        type: "ADD_USER",
        user: user
      });
    };
}
  