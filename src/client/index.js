
require('./style/index.styl');
const React = require('react');
const ReactDOM = require('react-dom');
console.log('it\'s working');

const Hello = React.createClass({
  render() {
    return <h1> hello </h1>;
  }
});

ReactDOM.render(<Hello/>, document.getElementById('root'));
