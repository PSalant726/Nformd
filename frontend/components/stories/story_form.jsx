const React = require('react');
const UserMenu = require('../nav_bar/user_menu');
const PublishMenu = require('../nav_bar/publish_menu');
const Link = require('react-router').Link;
const SessionStore = require('../../stores/session_store');
const StoryEditor = require('./story_editor');
const StoryActions = require('../../actions/story_actions');
const hashHistory = require('react-router').hashHistory;
import { Editor, EditorState } from 'draft-js';

const StoryForm = React.createClass({
  getInitialState(){
    return({
      userMenuVisible: false,
      publishMenuVisible: false,
      editorState: EditorState.createEmpty(),
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
    this.setState({ story: { title: event.target.value,
      body: this.state.story.body } });
  },

  editorChange(text){
    this.setState({
      story: {
        title: this.state.story.title,
        body: text
      }
    });
  },

  handleSubmit(event){
    event.preventDefault();
    StoryActions.createStory({
      title: this.state.story.title,
      body: this.state.story.body
    });
    this.setState({ story: { title: "", body: "" } });
    hashHistory.push("/");
  },

  // TODO: Add this line below 'publish-menu-button' hgroup:
  // <div className="notfications-button"></div>

  userTools(){
    return(
      <div className="nav">
        <hgroup
          className="publish-menu-button"
          onClick={ this.publishMenuToggle }>
          Publish
          <PublishMenu
            menuVisible={ this.state.publishMenuVisible }
            handleSubmit={ this.handleSubmit } />
        </hgroup>
        <hgroup
          className="nav-avatar"
          onClick={ this.userMenuToggle }>
          <img src={ this.state.author.avatar_url } />
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
          <div className="show-avatar">
            <img src={ this.state.author.avatar_url } />
          </div>
          <div className="show-details">
            <Link
              to={ `users/${this.state.author.id}` }
              className="show-author">
              { author }
            </Link>
            <p className="show-author-bio">
              { this.state.author.bio_preview }
            </p>
            <p className="draft">Draft</p>
          </div>
        </div>
        <form className="form">
          <input
            className="form-title"
            type="text"
            value={ this.state.story.title }
            onChange={ this.titleChange }
            placeholder="Title" />
          <StoryEditor
            editorChange={ this.editorChange }
            editorState={ this.state.editorState } />
        </form>
      </div>
    );
  }
});

module.exports = StoryForm;
