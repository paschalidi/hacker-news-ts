import React from "react";
import styled from "styled-components";
import { Article, fetchArticles } from "../articles/actions";
import { connect } from "react-redux";

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  .article-container {
    max-width: 756px;
    width: 100%;
  }

  .background-color {
    display: flex;
    box-shadow: inset 0 0 52px #eee;
    background-color: #f8f7f5;
    height: calc(100vh - 75px);
  }

  .page-title {
    font-size: 3rem;
    margin: 16px 0;
    align-self: start;
    background-color: #ff6600;
    display: table;
    padding: 0 4px;
  }

  .loading {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

const ArticleStyle = styled.div`
  margin: 0 100px;

  .single-article {
    padding-top: 28px;
    max-width: 570px;
    width: 100%;
  }

  .single-article > a {
    color: #3366aa;
    border-bottom: 1px #ddd solid;
    text-decoration: none;
  }

  span {
    color: #5a5a5a;
    font-size: 14px;
  }

  .info {
    margin-top: 4px;
    color: #5a5a5a;
    font-size: 10px;
  }
`;

const LineOnTop = styled.div`
  width: 100vw;
  height: 8px;
  background-color: #ff6600;
`;

const Loader = styled.div`
  .spinner span {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 4rem;
    border: 0.1em solid #ff6600;
    animation: 3s infinite spin ease;
  }
  .spinner span:nth-child(1) {
    animation-delay: 0s;
  }
  .spinner span:nth-child(2) {
    animation-delay: 0.1s;
  }
  .spinner span:nth-child(3) {
    animation-delay: 0.2s;
  }
  .spinner span:nth-child(4) {
    animation-delay: 0.3s;
  }
  .spinner span:nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0) scale(0);
      border-radius: 0%;
      border-color: #ff6600;
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(2.5);
      border-radius: 50%;
      border-color: #ff6600;
    }
    70% {
      transform: translate(-50%, -50%) rotate(180deg) scale(2.5);
      border-radius: 50%;
      border-color: #f3826f;
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(0);
      border-radius: 0%;
      border-color: #ffb961;
    }
  }
`;

interface Props {
  fetchArticles: Function;
  articles: Article[];
}
class App extends React.Component<Props> {
  componentDidMount(): void {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <>
        <LineOnTop />
        <Container>
          <div className="article-container">
            <div className="page-title">Hacker News</div>
            {articles.length === 0 ? (
              <div className="loading">
                <Loader>
                  <div className="spinner">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </Loader>
              </div>
            ) : (
              <div className="background-color">
                <ArticleStyle>
                  {articles.map(article => (
                    <div className="single-article" key={article.id}>
                      <a href={article.url}>{article.title}</a>
                      <span> — {article.by}</span>
                      <div className="info">
                        {article.score} points |{" "}
                        {article.kids ? article.kids.length : 0} comments
                      </div>
                    </div>
                  ))}
                </ArticleStyle>
              </div>
            )}
          </div>
        </Container>
      </>
    );
  }
}

interface ReduxArticle {
  articles: Article[];
}
export const AppConnected = connect(
  ({ articles }: ReduxArticle) => ({ articles }),
  { fetchArticles }
)(App);
