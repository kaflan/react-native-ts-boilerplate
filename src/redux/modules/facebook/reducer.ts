// import { reducerWithInitialState } from 'typescript-fsa-reducers';
// import { initialized, filmListLoaded } from './actions';
// import { IState, IFilm } from './types';
//
//
// interface RootReducer extends IState {
//   filmList?: IFilm[]
// }
//
// const INITIAL_STATE: RootReducer = {
//   isInitialized: false,
//   filmList: []
// };
// const reducer = reducerWithInitialState<RootReducer>(INITIAL_STATE)
//   .case(
//     initialized,
//     (state) => ({
//       ...state,
//       isInitialized: true,
//     })
//   )
//   .case(filmListLoaded, (state, amount) => {
//     return ({
//       ...state,
//       filmList: amount,
//     })
//   });
//
// export { reducer as global };
