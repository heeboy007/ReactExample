import { configureStore } from '@reduxjs/toolkit';

const counterReducer = ( state = { number: 0 }, action ) => {
    if(action.type === 'INCREMENT') {
        return { ...state, number: state.number + action.size };
    }
    return state;
}

const store = configureStore({
    reducer: counterReducer,
});

export default store;