const defaultState = {
    statusLogin: false
}

const authReducer = (state = defaultState, action) =>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                statusLogin: true
            }
        default:
            return state
    }
}

export default authReducer