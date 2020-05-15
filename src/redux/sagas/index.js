import { all } from "redux-saga/effects";

export default function* rootSaga() {
  // execute all watchers
  yield all([]);
  //yield all([search()]);
}
