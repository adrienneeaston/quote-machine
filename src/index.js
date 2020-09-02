import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '"If you’re always trying to be normal you will never know how amazing you can be."',
      author: '--Maya Angelou',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomQuotes = [
      ['"To be or not to be, that is the question."', '--William Shakespeare'],
      ['"The best revenge is massive success."', '--Frank Sinatra'],
      ['"The human race has one really effective weapon and that is laughter."', '--Mark Twain'],
      ['"Spoon!"', '--The Tick'],
      ['"If you’re always trying to be normal you will never know how amazing you can be."', '--Maya Angelou'],
      ['"Don\'t believe everything you see on the internet."', '--Abraham Lincoln']
    ]
    let randomIndex = Math.floor(Math.random() * 6)
    this.setState({
      quote: randomQuotes[randomIndex][0],
      author: randomQuotes[randomIndex][1],
    });
  }

  render() {
    return (
      <div id="quote-box">
          <p id="text">{this.state.quote}</p>
          <h2 id="author">{this.state.author}</h2>
          <button id="new-quote" type="click" onClick={this.handleClick}>New quote</button>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet quote</a>
      </div>
    );
  }
}

ReactDOM.render(
    <Quote />,
  document.getElementById('root')
);

