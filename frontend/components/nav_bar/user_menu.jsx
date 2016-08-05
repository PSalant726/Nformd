const React = require('react');
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');

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

              <li>

              </li>

              <li>
                <input
                  className="log-out-button"
                  type="submit"
                  value="Log Out"
                  onClick={ this.handleLogout } />
              </li>

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
