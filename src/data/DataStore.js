import { createStore, applyMiddleware } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducers } from "./CommonReducers";
import { asyncActions } from "./AsyncMiddleware";

export const SportsStoreDataStore = createStore(
  CommonReducers(ShopReducer, CartReducer),
  applyMiddleware(asyncActions)
);
