import { Dispatch } from "redux";
import axios from "axios";
import { Types } from "./types";

export interface Article {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  kids: number[];
}
export interface FetchArticlesAction {
  type: Types.fetchArticles;
  payload: Article[];
}

export type Action = FetchArticlesAction;

const url = "https://hacker-news.firebaseio.com/v0/topstories.json";

export const fetchArticles = () => {
  return async (dispatch: Dispatch) => {
    const { data: articleIds } = await axios.get<number[]>(url);

    let articles = await Promise.all(
      articleIds.slice(0, 10).map(async id => {
        const { data } = await axios.get<Article>(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return data;
      })
    );

    dispatch<FetchArticlesAction>({
      type: Types.fetchArticles,
      payload: articles
    });
  };
};
