import React from "react";

export default function Article({ article }) {
  return <div>
    Article{article?.id && 
      <div>
        <h1>{article.category}</h1>{}
        {article.id}
        <h3>{article.description}</h3>
      </div>
    }
  </div>;
}
