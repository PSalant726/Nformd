const React = require('react');

const PublishMenu = React.createClass({
  menuState(){
    if(this.props.menuVisible){
      return(
        <div className="publish-menu-outer">
          <div className="publish-menu-arrow" />
          <div className="publish-menu-inner">
            <ul className="publish-menu-content">
              <li className="publish-add-tags">
                <h1>Ready to publish?</h1>
                <p>Add or change tags (up to 5) so your story reaches more people:</p>
                <div className="add-tags-placeholder" />
              </li>
              <li className="publish-menu-list-separator" />
              <li className="publish-button-container">
                <button
                  className="publish-button"
                  onClick={ this.props.handleSubmit }>
                  Publish
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  render(){
    return(<div>{ this.menuState() }</div>);
  }
});

module.exports = PublishMenu;
