const React = require('react');
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');
const Link = require('react-router').Link;

const UserMenu = React.createClass({
  handleLogout(){
    SessionActions.logout();
  },

  render(){
    let menuState;
    if(this.props.menuVisible){
      menuState = (
        <div className="user-menu-outer">
          <div className="menu-arrow" />
          <div className="user-menu-inner">
            <ul className="user-menu-content">
              <Link to={ "stories/new" }>
                <li className="user-menu-link">New Story</li>
              </Link>
              <a>
                <li className="user-menu-link">Drafts</li>
              </a>
              <a>
                <li className="user-menu-link">Stories</li>
              </a>
              <a>
                <li className="user-menu-link">Stats</li>
              </a>
              <li className="user-menu-list-separator" />
              <a>
                <li className="user-menu-link">Bookmarks</li>
              </a>
              <a>
                <li className="user-menu-link">Publications</li>
              </a>
              <a>
                <li className="user-menu-link">Follow your interests</li>
              </a>
              <li className="user-menu-list-separator" />
              <a className="rem-pad">
                <li className="user-menu-link personal-link">Profile</li>
              </a>
              <a className="rem-pad">
                <li className="user-menu-link personal-link">Settings</li>
              </a>
              <a className="rem-pad">
                <li
                  className="user-menu-link personal-link"
                  onClick={ this.handleLogout }>
                  Sign out
                </li>
              </a>
            </ul>
          </div>
        </div>
      );
    } else {
      menuState = <div></div>;
    }

    return(
      <div>{ menuState }</div>
    );
  }
});

module.exports = UserMenu;
