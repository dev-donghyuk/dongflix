import { createStore, combineReducers } from 'redux';

import reducer from './reducer';

const appReducer = combineReducers({
   reducer,
});

export const store = createStore(appReducer);

// useSelector를 위해 필요
export type RootState = ReturnType<typeof appReducer>;
