import { combineReducers } from 'redux';

import { authReducer } from './auth/reducer';
import { user } from './user/reducers';

const rootReducer = combineReducers({
  authReducer,
  user,
});

export { rootReducer };
