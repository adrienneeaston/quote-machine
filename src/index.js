import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '"Hello Jay!"',
      author: '--Adrienne'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      quote: '"Hello Adrienne!"',
      author: '--Jay'
    });
  }

  render() {
    return (
      <div className="quote-box">
          <p id="text">{this.state.quote}</p>
          <h2 id="author">{this.state.author}</h2>
          <button id="new-quote" type="click" onClick={this.handleClick}>New quote</button>
          <a id="new-quote" href="https://twitter.com/intent/tweet">Tweet quote</a>
      </div>
    );
  }
}

ReactDOM.render(
    <Quote />,
  document.getElementById('root')
);

