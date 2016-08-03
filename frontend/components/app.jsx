const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  componentDidMount(){
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  handleLogout(){
    SessionActions.logout();
  },

  greeting(){
    if (SessionStore.isUserLoggedIn()){
      return(
        <hgroup>
          <h2>Welcome, { SessionStore.currentUser().username }!</h2>
          <input type="submit" value="Log Out" onClick={ this.handleLogout } />
        </hgroup>
      );
    } else if (!["/login", "/signup"].includes(this.props.location.pathname)) {
      return(
        <nav>
          <Link to="/login" activeClassName="current">Log In</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Create Account</Link>
        </nav>
      );
    }
  },

  render(){
    return(
      <div>
        <header>
          <Link to="/" className="header-link"><h1>Nformd</h1></Link>
          { this.greeting() }
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
