const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const SessionStore = require('../../stores/session_store');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;

const UserShow = React.createClass({
  getInitialState(){
    return({
      user: {},
      imageFile: null,
      imageUrl: null
    });
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
        fileSelected = <button
          className="upload-button"
          onClick={ this.handleSubmit }>
          Upload
        </button>;
      } else {
        fileSelected = <div />;
      }

      return(
        <div className="user-photo-upload group">
          <input type="file" onChange={ this.updateFile } />
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
          { this.avatarControls() }
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
