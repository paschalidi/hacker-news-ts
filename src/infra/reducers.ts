import { combineReducers } from "redux";
import { articlesReducer } from "../articles/reducers";
import { Article } from "../articles/actions";

interface StoreState {
  articles: Article[];
}
export const reducers = combineReducers<StoreState>({
  articles: articlesReducer
});
