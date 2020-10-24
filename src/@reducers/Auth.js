
import actionType from "../@constants";

const initialState = {
    loading: true,
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_RESULT:
            return {
                ...state,
                loading: action.loading,
                count: action.count
            };

        default:
            return state;
    }
};
