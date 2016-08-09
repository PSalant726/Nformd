const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const SessionStore = require('../../stores/session_store');
const Link = require('react-router').Link;

const UserShow = React.createClass({
  getInitialState(){
    return({ user: {} });
  },

  componentDidMount(){
    this.userListener = UserStore.addListener(this.handleChange);
    UserActions.getUser(parseInt(this.props.params.id));
  },

  componentWillUnmount(){
    this.userListener.remove();
  },

  handleChange(){
    this.setState({ user: UserStore.user() });
  },

  followToggle(){
    // TODO: Render and return Follow/Following button
    return(
      <button className="user-followtoggle">Follow</button>
    );
  },

  author(username, fname, lname){
    if (fname && lname){
      return fname + " " + lname;
    } else {
      return username;
    }
  },

  avatar(){
    if(this.state.user.id === SessionStore.currentUser().id){
      return(
        <div className="user-show-avatar-placeholder">
          Upload Placeholder!
        </div>
      );
    } else {
      return(
        <div className="user-show-avatar">
          <img src={ this.state.user.avatar_url } />
        </div>
      );
    }
  },

  render(){
    return(
      <div className="user-show">
        <div className="user-details">
          <div className="user-header group">
            { this.avatar() }
            <h1 className="user-username">
              {
                this.author(
                  this.state.user.username,
                  this.state.user.fname,
                  this.state.user.lname
                )
              }
            </h1>
            <p className="user-bio">{ this.state.user.bio }</p>
          </div>
          <div className="user-follow-info group">
            <div className="user-num-following">
              <span className="bold">200</span> Following
            </div>
            <div className="user-num-followers">
              <span className="bold">50</span> Followers
            </div>
          </div>
          { this.followToggle() }
        </div>
        <div className="user-feed-tabs group">
          <button>Profile</button>
          <button>Latest</button>
          <button>Recommends</button>
          <button>Responses</button>
        </div>
      </div>
    );
  }
});

module.exports = UserShow;
