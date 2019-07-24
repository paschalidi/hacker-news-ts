import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  .article-container {
    min-width: 756px;
    background-color: #f8f7f5;
    min-height: 100vh;
  }
`;

const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .entry {
    max-width: 570px;
  }
`;

const App: React.FC = () => {
  return (
    <Container>
      <div className="article-container">
        <Article>
          <div className="entry">
            div Install gatsby-source-filesystem: Configuring but no suggested
            path to mkdir at (e.g. /blog/). Add more explicit guidance on this
            page. Note on creating Markdown files: This is not very helpful in
            terms of where to place the Markdown files (in /articles?). Add more
            explicit guidance on YYYY-MM-DD-lorem-ipsum-dolor-sit-amet/index.md
            file naming. Tone: Sideline some of the extraneous information that
            we don’t need as a note, e.g. Gatsby calls the createPages API (if
            present. Style: Correct minor issues (punctuation is inconsistent;
            periods at ends of headings and hyphens instead of em-dashes).
          </div>
        </Article>
      </div>
    </Container>
  );
};

export default App;
