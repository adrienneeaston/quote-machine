import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// ReactDOM.render(
//   <Quote />,
//   document.getElementById('quote-box')
// );

// class Quote extends React.Component {
//   constructor(props) {
//     super(prop);
//     this.state = {
//       quote: '',
//       author: ''
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     this.setState({
//       quote: 'Hello!',
//       author: 'me'
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2 id="text">{this.state.quote}</h2>
//         <h3 id="author">{this.state.author}</h3>
//         <button id="new-quote" type="click" onClick={this.handleClick}>New quote</button>
//         <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet quote</a>
//       </div>
//     )
//   }
// }

// ReactDOMServer.renderToString(<Quote />);
