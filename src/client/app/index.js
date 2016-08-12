const React = require('react');
const ReactDOM = require('react-dom');
const Button = require('./Button');

class App extends React.Component {
  render() {
    return (
      <div>
      <p> Hello mapU! I am Danqi! </p>
      <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
