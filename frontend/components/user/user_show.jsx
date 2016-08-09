const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
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
  },

  render(){
    return(
      <div className="user-details">
        <h1 className="user-username">{ this.state.user.username }</h1>
        <p className="user-bio">{ this.state.user.bio }</p>
        <div className="user-show-avatar-placeholder">
          User Profile Image
        </div>
        <p className="user-num-following">100 Following</p>
        <p className="user-num-followers">50 Followers</p>
        { this.followToggle() }
        <ul className="user-feed-tabs">
          <li>Profile</li>
          <li>Latest</li>
          <li>Recommends</li>
          <li>Responses</li>
        </ul>
        <div className="user-feed-goes-here">User Feed!</div>
      </div>
    );
  }
});

module.exports = UserShow;
