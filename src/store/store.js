import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
};

const persistedWishlistReducer = persistReducer(
  wishlistPersistConfig,
  wishlistReducer,
);

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    wishlist: persistedWishlistReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
