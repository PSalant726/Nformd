const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const Modal = require('react-modal');
const FormModal = require('./form_modal');

const App = React.createClass({
  getInitialState(){
    return({ modalOpen: false });
  },

  componentDidMount(){
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  handleLogout(){
    SessionActions.logout();
  },

  handleClick(){
    this.setState({ modalOpen: true });
  },

  closeModal(){
    this.setState({ modalOpen: false });
  },

  greeting(){
    if (SessionStore.isUserLoggedIn()){
      return(
        <hgroup>
          <h2>Welcome, { SessionStore.currentUser().username }!</h2>
          <input
            type="submit"
            value="Log Out"
            onClick={ this.handleLogout } />
        </hgroup>
      );
    } else {
      return(
        <nav>
          <button
            className="modal-toggle"
            onClick={ this.handleClick }>
            Sign In / Sign Up
          </button>
        </nav>
      );
    }
  },

  render(){
    return(
      <div>
        <header className="header group">
          <a href="/" className="header-link"><h1>Nformd</h1></a>
          { this.greeting() }
        </header>

        <FormModal
          modalOpen={ this.state.modalOpen }
          closeModal={ this.closeModal }/>

        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
