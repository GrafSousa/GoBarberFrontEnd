import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

function persistReducers(reducers) {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['authReducer', 'user'],
    },
    reducers
  );

  return persistedReducer;
}

export { persistReducers };
