const React = require('react');
import { Editor, EditorState, RichUtils } from 'draft-js';

const StoryEditor = React.createClass({
  handleKeyCommand(command){
    const newState = RichUtils.handleKeyCommand(this.props.editorState, command);
    if(newState){
      this.props.editorChange(newState);
      return true;
    }
    return false;
  },

  onBoldClick(){
    this.props.editorChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'));
  },

  onItalicClick(){
    this.props.editorChange(RichUtils.toggleInlineStyle(this.props.editorState, 'ITALIC'));
  },

  onUnderlineClick(){
    this.props.editorChange(RichUtils.toggleInlineStyle(this.props.editorState, 'UNDERLINE'));
  },

  render(){
    return(
      <div className="form-editor">
        <button
          className="form-style-button"
          onClick={ this.onBoldClick }>B</button>
        <button
          className="form-style-button"
          onClick={ this.onItalicClick }>I</button>
        <button
          className="form-style-button"
          onClick={ this.onUnderlineClick }>U</button>
        <Editor
          editorState={ this.props.editorState }
          handleKeyCommand={ this.handleKeyCommand }
          onChange={ this.props.editorChange }
          placeholder="Tell your story..." />
      </div>
    );
  }
});

module.exports = StoryEditor;
