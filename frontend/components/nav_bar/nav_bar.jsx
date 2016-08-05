const React = require('react');
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');
const Modal = require('react-modal');
const FormModal = require('../form_modal');
const UserMenu = require('./user_menu');

const NavBar = React.createClass({
  getInitialState(){
    return({
      modalOpen: false,
      menuVisible: false
    });
  },

  componentDidMount(){
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  handleClick(){
    this.setState({ modalOpen: true });
  },

  closeModal(){
    this.setState({ modalOpen: false });
  },

  menuToggle(){
    if(this.state.menuVisible){
      this.setState({ menuVisible: false });
    } else {
      this.setState({ menuVisible: true });
    }
  },

  userTools(){
    if (SessionStore.isUserLoggedIn()){
      return(
        <hgroup
          className="avatar-image-placeholder"
          onClick={ this.menuToggle }>

          <UserMenu menuVisible={ this.state.menuVisible } />

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
          { this.userTools() }
        </header>

        <FormModal
          modalOpen={ this.state.modalOpen }
          closeModal={ this.closeModal }/>
      </div>
    );
  }
});

module.exports = NavBar;
