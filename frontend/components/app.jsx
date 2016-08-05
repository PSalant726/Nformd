const React = require('react');
const NavBar = require('./nav_bar/nav_bar');

const App = React.createClass({
  render(){
    return(
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
