// // this effects are escentials in a saga
// import { takeLatest, put, call } from "redux-saga/effects";
// import { apiCall } from "../api";
// import {
//   SEARCH_REQUEST,
//   SEARCH_SUCCESS,
//   SEARCH_ERROR,
//   DETAIL_REQUEST,
//   DETAIL_SUCCESS,
//   DETAIL_ERROR,
// } from "../../consts/actionTypes";

// // Generator function with *
// export function* searchItems({ payload }) {
//   try {
//     const resultsData = yield call(
//       apiCall,
//       `items?q=${payload.search}`,
//       null,
//       null,
//       "get"
//     );
//     // put effect => dispatch an action and the reducer catch it!
//     yield put({ type: SEARCH_SUCCESS, resultsData });
//   } catch (error) {
//     yield put({ type: SEARCH_ERROR, error });
//   }
// }

// export function* searchItemById({ payload }) {
//   try {
//     const detailData = yield call(
//       apiCall,
//       `items/${payload.id}`,
//       null,
//       null,
//       "get"
//     );
//     // put effect => dispatch an action and the reducer catch it!
//     yield put({ type: DETAIL_SUCCESS, detailData });
//   } catch (error) {
//     yield put({ type: DETAIL_ERROR, error });
//   }
// }

// // allows to listen the search items action
// export default function* search() {
//   // watchers, listen to the SEARCH_REQUEST and DETAIL_REQUEST actions and execute searchItems and
//   yield takeLatest(SEARCH_REQUEST, searchItems);
//   yield takeLatest(DETAIL_REQUEST, searchItemById);
// }
