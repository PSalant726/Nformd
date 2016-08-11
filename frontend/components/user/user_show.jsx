const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const SessionStore = require('../../stores/session_store');
const FollowingStore = require('../../stores/following_store');
const FollowingActions = require('../../actions/following_actions');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;

const UserShow = React.createClass({
  getInitialState(){
    return({
      user: {},
      imageFile: null,
      imageUrl: null,
      followers: {},
      followees: {},
      followingId: ""
    });
  },

  componentDidMount(){
    this.userListener = UserStore.addListener(this.handleUserChange);
    this.followingsListener = FollowingStore.addListener(this.getFollowings);
    UserActions.getUser(this.props.params.id);
    FollowingActions.fetchFollowings(this.props.params.id);
  },

  componentWillUnmount(){
    this.userListener.remove();
    this.followingsListener.remove();
  },

  componentWillReceiveProps(newProps){
    UserActions.getUser(newProps.params.id);
    FollowingActions.fetchFollowings(newProps.params.id);
  },

  handleUserChange(){
    this.setState({ user: UserStore.user() });
  },

  getFollowings(){
    this.setState({
      followers: FollowingStore.followers(),
      followees: FollowingStore.followees(),
      followingId: FollowingStore.following_id()
    });
  },

  followButton(){
    if(this.state.user.id === SessionStore.currentUser().id){
      return(<div />);
    } else {
      if (this.state.followers[SessionStore.currentUser().id]){
        return(
          <button
            onClick={ this.followToggle }
            className="user-followtoggle-following">
            Unfollow
          </button>
        );
      } else {
        return(
          <button
            onClick={ this.followToggle }
            className="user-followtoggle-follow">
            Follow
          </button>
        );
      }
    }
  },

  followToggle(){
    if (this.state.followers[SessionStore.currentUser().id]){
      FollowingActions.deleteFollowee(this.state.followingId);
    } else {
      FollowingActions.addFollowee(parseInt(this.props.params.id));
    }
  },

  author(username, fname, lname){
    if (fname && lname){
      return fname + " " + lname;
    } else {
      return username;
    }
  },

  updateFile(event){
    let file = event.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if(file) fileReader.readAsDataURL(file);
  },

  handleSubmit(event){
    let formData = new FormData();
    formData.append("user[avatar]", this.state.imageFile);
    UserActions.updateUserPic(this.state.user, formData);
    this.setState({ imageFile: null, imageUrl: null });
  },

  avatarControls(){
    if(this.state.user.id === SessionStore.currentUser().id){
      let fileSelected;
      if (this.state.imageFile){
        return(
          <button
            className="upload-button"
            onClick={ this.handleSubmit }>
            Upload
          </button>
        );
      } else {
        return(
          <div className="user-photo-upload group">
            <input
              type="file"
              name="file"
              id="file"
              onChange={ this.updateFile }
              className="choose-file-button" />
            <label htmlFor="file">Choose a Profile Photo</label>
          </div>
        );
      }

      return(
        <div className="user-photo-upload group">
          <input
            type="file"
            name="file"
            id="file"
            onChange={ this.updateFile }
            className="choose-file-button" />
          <label htmlFor="file">Choose a Profile Photo</label>
          { fileSelected }
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  },

  render(){
    let newImage;
    if (this.state.imageUrl){
      newImage = <img src={ this.state.imageUrl } />;
    } else {
      newImage = <div />;
    }

    return(
      <div className="user-show">
        <div className="user-details">
          <div className="user-header group">
            <div className="user-show-avatar">
              { newImage }
              <img src={ this.state.user.avatar_url } />
            </div>
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
              <span className="bold">
                { Object.keys(this.state.followees).length }
              </span> Following
            </div>
            <div className="user-num-followers">
              <span className="bold">
                { Object.keys(this.state.followers).length }
              </span> Followers
            </div>
          </div>
          { this.avatarControls() }
          { this.followButton() }
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
