import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./modules/rootReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Config do redux-persist
const persistConfig = {
  key: "app-academy",
  storage,
  whitelist: ["userLogged"], // Os estados que quero persistir
  blackList: [], // Estados que eu não quero persistir
};

// Persiste todos os estados
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Config do store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Tipos para o Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
