const React = require('react');
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');
const Modal = require('react-modal');
const FormModal = require('../user/form_modal');
const UserMenu = require('./user_menu');
const UserStore = require('../../stores/user_store');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const NavBar = React.createClass({
  getInitialState(){
    return({
      modalOpen: false,
      menuVisible: false
    });
  },

  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
    this.userListener = UserStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount(){
    this.sessionListener.remove();
    this.userListener.remove();
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


// TODO: Add this line below 'Write a Story' link and 'Sign In as Guest' button:
// <div className="logged-out-nav-search"></div>
// TODO: Add this line below 'Write a Story' link:
// <div className="notfications-button"></div>

  userTools(){
    if (SessionStore.isUserLoggedIn()){
      return(
        <div className="nav">
          <Link
            to={ '/stories/new' }
            className="new-story">
            Write a story
          </Link>
          <hgroup
            className="nav-avatar"
            onClick={ this.menuToggle }>
            <img src={ SessionStore.currentUser().avatar_url } />
            <UserMenu menuVisible={ this.state.menuVisible } />
          </hgroup>
        </div>
      );
    } else {
      return(
        <nav className="nav-buttons">
          <button
            className="modal-toggle"
            onClick={ this.handleClick }>
            Sign in / Sign up
          </button>
          <button
            id="guest"
            className="modal-toggle"
            onClick={ this.guestSignin } >
            Sign In as Guest
          </button>
        </nav>
      );
    }
  },

  guestSignin(event){
    event.preventDefault();
    SessionActions.login({
      username: "guest.user",
      password: "password"
    },
      this.closeModal
    );
  },

  render(){
    return(
      <div>
        <header className="header group">
          <Link to={ "/" }>
            <div className="logo-white-background"></div>
            <div className="header-link"><h1>Nformd</h1></div>
          </Link>
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
