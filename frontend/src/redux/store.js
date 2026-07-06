// import { configureStore } from '@reduxjs/toolkit'
// import userSlice from "./userSlice"

// export const store = configureStore({
//   reducer: {
//     user:userSlice
//   },
// })

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import userSlice from "./userSlice"; // Example slice

// 1. Combine all your reducers
const rootReducer = combineReducers({
  user:userSlice,
});

// 2. Define the configuration for redux-persist
const persistConfig = {
  key: 'Sitegen-AI',
  version: 1,
  storage: storage.default
  // whitelist: ['auth'] // Optional: Only these reducers will be saved
  // blacklist: ['counter'] // Optional: These reducers will be ignored
};

// 3. Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore internal redux-persist actions to prevent console warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. Create the persistor
export const persistor = persistStore(store);
