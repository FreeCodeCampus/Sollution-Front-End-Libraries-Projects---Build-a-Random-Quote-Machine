import React from "react";
import logo from "./logo.svg";
import "./App.css";

const qoutesBox = [
  {
    qoute:
      "If you do what you've always done, you'll get what you've always gotten.",
    autohor: "Tony Robbins"
  },
  {
    qoute:
      "I am thankful for all of those who said NO to me. It's because of them I'm doing it myself. ",
    autohor: "Albert Einstein"
  },
  {
    qoute:
      "If you hate your life, it will hate you back. If you love your life, it will love you back.",
    autohor: "Darrick Williams"
  },
  {
    qoute:
      "I'm a believer. I believe in the goodness of life. I believe in the brotherhood of mankind. I believe in humanity.",
    autohor: "Nurudeen Ushawu"
  },
  { qoute: "Once you choose hope, anything’s possible." }
];

let random = 0;

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ""
    };
  }

  componentDidMount() {
    random = Math.floor(Math.random() * 4 + 1);
    this.setState({
      quotes: qoutesBox[random].qoute
    });
  }

  render() {
    return (
      <div>
        <div id="text">{this.state.quotes}</div>
        <div id="author">Mone</div>
        <button id="new-quote">Next</button>
        <a id="tweet-quote">Tweet</a>
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
