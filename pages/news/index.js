import Article from "@/comps/Article";
import Link from "next/link";
import React, { useState } from "react";

export default function newsArticle({ articles }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const showBox = (id) => {
    setShow(true);
    setId(id);
    console.log(id);
  }
  return (
    <>
      <h1>List of Articles</h1>
      {articles.map((article) => {
        return (
          <h1 key={article.id} onClick={() => showBox(article.id)}>
            <p>{article.title}</p>
          </h1>
        );
      })}
      {show && <Article article = {articles[id-1]} />}
    </>
  );
}

export async function getServerSideProps() {
  console.log("Pre-renering news page");
  const response = await fetch("http://localhost:3000/api/news");
  const data = await response.json();
  console.log(typeof data);
  return {
    props: {
      articles: JSON.parse(data),
    },
  };
}
