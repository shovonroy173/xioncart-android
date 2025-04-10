import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import {authSlice} from './slices/authSlice';
// import {categorySlice} from './slices/categorySlice';
const persistedConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const combinedReducer = combineReducers({
  auth: authReducer,
  authApi: authSlice.reducer,
  // categoryApi: categorySlice.reducer,
});

const persistedReducer = persistReducer(persistedConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authSlice.middleware),
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);
