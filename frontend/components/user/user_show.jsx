const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');

const UserShow = React.createClass({
  getInitialState(){
    return({ user: {} });
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

  render(){
    return(
      <div>User Show Page!</div>
    );
  }
});

module.exports = UserShow;
