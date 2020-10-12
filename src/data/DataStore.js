import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducers } from "./CommonReducers";

export const SportsStoreDataStore = createStore(
  CommonReducers(ShopReducer, CartReducer)
);
