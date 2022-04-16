const stateDefault = {
    user: {},
    listUser: []
};

let userReducer = function(state= stateDefault, action) {
    switch (action.type) {
        case "ADD_USER": {
            const {listUser =[]} = state;
            const newList = listUser?.length ? [...listUser,action.user] : [action.user] ;
          return Object.assign({}, state, { listUser: newList });
        }
        default: {
          return state;
        }
    }
}

export default userReducer;