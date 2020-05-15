// import {
//   SEARCH_REQUEST,
//   SEARCH_SUCCESS,
//   SEARCH_ERROR,
//   DETAIL_REQUEST,
//   DETAIL_SUCCESS,
//   DETAIL_ERROR,
// } from "../../consts/actionTypes";

// const initialState = {};
// export default function (state = initialState, action) {
//   switch (action.type) {
//     case SEARCH_REQUEST:
//       return { ...state, isLoading: true, items: null };
//       break;
//     case SEARCH_SUCCESS:
//       const { items } = action.resultsData.data;
//       const searchCategories = action.resultsData.data.categories;
//       return {
//         ...state,
//         isLoading: false,
//         items: items,
//         categories: searchCategories,
//       };
//       break;
//     case SEARCH_ERROR:
//       return { ...state, isLoading: false, items: null, categories: null };
//       break;

//     case DETAIL_REQUEST:
//       return { ...state, isLoading: true, item: null, categories: null };
//       break;
//     case DETAIL_SUCCESS:
//       const { item } = action.detailData.data;
//       const detailCategories = action.detailData.data.categories;
//       return {
//         ...state,
//         isLoading: false,
//         item: item,
//         categories: detailCategories,
//       };
//       break;
//     case DETAIL_ERROR:
//       return { ...state, isLoading: false, item: null, categories: null };
//       break;
//     default:
//       return { ...state };
//   }
// }
