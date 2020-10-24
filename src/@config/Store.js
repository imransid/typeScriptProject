import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import combinereducer from "../@reducers";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}


const Store = createStore(combinereducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default Store;