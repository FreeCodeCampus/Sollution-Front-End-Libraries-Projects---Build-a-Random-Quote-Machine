import React from "react";
import "./App.css";

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

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ""
    };
    this.randomizer = this.randomizer.bind(this);
  }
  randomizer() {
    random = Math.floor(Math.random() * 5);
    console.log(random);
    this.setState({
      quotes: qoutesBox[random].qoute,
      author: qoutesBox[random].author
    });
  }
  componentDidMount() {
    this.randomizer();
  }

  render() {
    return (
      <div>
        <div id="text">{this.state.quotes}</div>
        <div id="author">{this.state.author}</div>
        <button id="new-quote" onClick={this.randomizer}>
          Next
        </button>
        <a id="tweet-quote" href={"https://www.twitter.com/intent/tweet"}>
          Tweet
        </a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
