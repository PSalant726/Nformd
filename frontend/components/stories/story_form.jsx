const React = require('react');
const UserMenu = require('../nav_bar/user_menu');
const PublishMenu = require('../nav_bar/publish_menu');
const Link = require('react-router').Link;
const SessionStore = require('../../stores/session_store');
const Quill = require('react-quill');

const StoryForm = React.createClass({
  getInitialState(){
    return({
      userMenuVisible: false,
      publishMenuVisible: false,
      author: SessionStore.currentUser(),
      story: {
        title: "",
        body: ""
      }
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

  author(username, fname, lname){
    if (fname && lname){
      return fname + " " + lname;
    } else {
      return username;
    }
  },

  titleChange(event){
    this.setState({ story: { title: event.target.value } });
  },

  bodyChange(event){
    this.setState({ story: { body: event.target.value } });
  },

  handleSubmit(){
    // NB: This is what happens when the form is submitted
  },

  submitForm(){
    // TODO: Find a way to submit the form using this function
  },

  userTools(){
    return(
      <div className="nav">
        <hgroup
          className="publish-menu-button"
          onClick={ this.publishMenuToggle }>
          Publish
          <PublishMenu
            menuVisible={ this.state.publishMenuVisible }
            submitform={ this.submitForm } />
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
    let author;
    if (this.state.author.username === ""){
      author = "";
    } else {
      author = this.author(
        this.state.author.username,
        this.state.author.fname,
        this.state.author.lname
      );
    }

    return(
      <div>
        <header className="header group">
          <Link to={ "/" }>
            <div className="logo-white-background"></div>
            <p className="form-draft-text">Draft</p>
          </Link>
          { this.userTools() }
        </header>
        <div className="show-details-image">
          <div className="image-container">
            <a className="show-avatar-image-placeholder" />
          </div>
          <div className="show-details">
            <a className="show-author">{ author }</a>
            <p className="show-author-bio">
              { this.state.author.bio_preview }
            </p>
            <p className="draft">Draft</p>
          </div>
        </div>
        <form
          className="form"
          onSubmit={ this.handleSubmit }>
          <input
            className="form-title"
            type="text"
            value={ this.state.story.title }
            onChange={ this.titleChange }
            placeholder="Title" />
          <Quill
            className="form-body"
            value={ this.state.story.body }
            onChange={ this.bodyChange }
            defaultValue="Tell your story..." />
        </form>
      </div>
    );
  }
});

module.exports = StoryForm;
