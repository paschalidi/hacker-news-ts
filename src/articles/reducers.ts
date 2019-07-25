import { Types } from "./types";
import { Action, Article } from "./actions";

export const articlesReducer = (state: Article[] = [], action: Action) => {
  switch (action.type) {
    case Types.fetchArticles: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
