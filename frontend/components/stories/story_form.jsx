const React = require('react');
const UserMenu = require('../nav_bar/user_menu');
const PublishMenu = require('../nav_bar/publish_menu');
const Link = require('react-router').Link;

const StoryForm = React.createClass({
  getInitialState(){
    return({
      userMenuVisible: false,
      publishMenuVisible: false
    });
  },

  userMenuToggle(){
    if(this.state.userMenuVisible){
      this.setState({ userMenuVisible: false });
    } else {
      this.setState({ userMenuVisible: true });
    }
  },

  publishMenuToggle(){
    if(this.state.publishMenuVisible){
      this.setState({ publishMenuVisible: false });
    } else {
      this.setState({ publishMenuVisible: true });
    }
  },

  userTools(){
    return(
      <div className="nav">
        <hgroup
          className="publish-menu-button"
          onClick={ this.publishMenuToggle }>
          Publish
          <PublishMenu menuVisible={ this.state.publishMenuVisible } />
        </hgroup>
        <div className="notfications-button"></div>
        <hgroup
          className="nav-avatar-image-placeholder"
          onClick={ this.userMenuToggle }>
          <UserMenu menuVisible={ this.state.userMenuVisible } />
        </hgroup>
      </div>
    );
  },

  render(){
    return(
      <div>
        <header className="header group">
          <Link to={ "/" }>
            <div className="logo-white-background"></div>
            <p className="form-draft-text">Draft</p>
          </Link>
          { this.userTools() }
        </header>
      </div>
    );
  }
});

module.exports = StoryForm;
