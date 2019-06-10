const initialState = {
    data: null
}

export function products(state = initialState, action) {
    switch (action.type) {
        case "PERSONS_FETCH_DATA_SUCCESS":
            console.log(action);
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}