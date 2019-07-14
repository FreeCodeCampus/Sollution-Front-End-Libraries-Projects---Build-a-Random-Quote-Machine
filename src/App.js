import React, { useState, useEffect } from "react";

const qoutesBox = [
  {
    qoute:
      "If you do what you've always done, you'll get what you've always gotten.",
    author: "Tony Robbins"
  },
  {
    qoute:
      "I am thankful for all of those who said NO to me. It's because of them I'm doing it myself. ",
    author: "Albert Einstein"
  },
  {
    qoute:
      "If you hate your life, it will hate you back. If you love your life, it will love you back.",
    author: "Darrick Williams"
  },
  {
    qoute:
      "I'm a believer. I believe in the goodness of life. I believe in the brotherhood of mankind. I believe in humanity.",
    author: "Nurudeen Ushawu"
  },
  {
    qoute: "Once you choose hope, anything’s possible.",
    author: "Christopher Reeve"
  }
];

let random = 0;

const QuoteBox = () => {
  const [quotes, setQuote] = useState();
  const [authors, setAuthor] = useState();

  const randomizer = () => {
    random = Math.floor(Math.random() * 5);
    console.log(random);
    setQuote(qoutesBox[random].qoute);
    setAuthor(qoutesBox[random].author);
  };

  useEffect(() => {
    randomizer();
  }, []);

  return (
    <div>
      <div id="text">{quotes}</div>
      <div id="author">{authors}</div>
      <button id="new-quote" onClick={randomizer}>
        Next
      </button>
      <a id="tweet-quote" href={"https://www.twitter.com/intent/tweet"}>
        Tweet
      </a>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
