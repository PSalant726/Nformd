const React = require('react');
// import { Editor, EditorState, RichUtils } from 'draft-js';
import Editor from 'react-medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/beagle.css');

const StoryEditor = React.createClass({
  getInitialState(){
    return({ text: "" });
  },

  handleChange(text){
    this.setState({ text: text });
    this.props.editorChange(this.state.text);
  },

  render(){
    return(
      <div className="form-editor">
        <Editor
          text={ this.state.text }
          data-placeholder="Tell your story..."
          onChange={ this.handleChange }
        />
      </div>
    );
  }
});

module.exports = StoryEditor;


// NB: Old Story Editor Functions
//
// handleKeyCommand(command){
//   const newState = RichUtils.handleKeyCommand(this.props.editorState, command);
//   if(newState){
//     this.props.editorChange(newState);
//     return true;
//   }
//   return false;
// },
//
// onBoldClick(){
//   this.props.editorChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'));
// },
//
// onItalicClick(){
//   this.props.editorChange(RichUtils.toggleInlineStyle(this.props.editorState, 'ITALIC'));
// },
//
// onUnderlineClick(){
//   this.props.editorChange(RichUtils.toggleInlineStyle(this.props.editorState, 'UNDERLINE'));
// },


// NB: Old Editor Form
// <button
//   className="form-style-button"
//   onClick={ this.onBoldClick }>B</button>
// <button
//   className="form-style-button"
//   onClick={ this.onItalicClick }>I</button>
// <button
//   className="form-style-button"
//   onClick={ this.onUnderlineClick }>U</button>
// <Editor
//   editorState={ this.props.editorState }
//   handleKeyCommand={ this.handleKeyCommand }
//   onChange={ this.props.editorChange }
//   placeholder="Tell your story..." />
