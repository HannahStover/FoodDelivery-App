import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { restaurants } from "./restaurants";
import { comments } from "./comments";
import { promotions } from "./promotions";
import { leaders } from "./leaders";
import { favorites } from "./favorites";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

const config = {
  key: "root",
  storage,
  debug: true
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      restaurants,
      comments,
      promotions,
      leaders,
      favorites
    }),
    applyMiddleware(thunk, logger)
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
