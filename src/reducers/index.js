import { combineReducers } from "redux";
import { reducers as frutasReducers } from "./frutas/fruta.reducer";


const reducers = combineReducers({
  frutasReducers,
});


export default reducers;