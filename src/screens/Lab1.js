import React, { useState } from "react";
// Styled
import styled from "styled-components";

const Parser = require("rss-parser");
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

function Lab1() {
  const [value, setValue] = useState({
    url: "https://vnexpress.net/rss/cuoi.rss",
    items: [],
  });

  const getRss = async () => {
    const parser = new Parser();

    const feed = await parser.parseURL(value.url);

    let items = feed.items.slice(0, 5);
    console.log(items);

    setValue((prevValue) => {
      return { ...prevValue, items: items };
    });
  };

  function handleChange(event) {
    let { name, value } = event.target;
    setValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div className="Lab1">
      <Form>
        <h1>Lab 1</h1>
        <input
          type="text"
          name="url"
          value={value.url}
          onChange={handleChange}
        ></input>
        <button type="button" onClick={getRss}>
          Lấy tin
        </button>
      </Form>
      {value.items.map((item) => (
        <NewsItem key={item.title}>
          <a href={item.link}>{item.title}</a>
          <p>{item.pubDate}</p>
          <p>{item.contentSnippet}</p>
        </NewsItem>
      ))}
    </div>
  );
}

const NewsItem = styled.div`
  border-style: solid;
  border-color: black;
  padding: 1rem;
  margin: 1rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
  }
`;

const Form = styled.div`
  text-align: center;
  input {
    width: 60%;
    height: 2rem;
    text-align: center;
  }
  button {
    height: 2rem;
  }
`;

export default Lab1;
