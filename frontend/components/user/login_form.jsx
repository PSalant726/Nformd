const React = require('react');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const ErrorStore = require('../../stores/error_store');
const FormModal = require('./form_modal');

const LoginForm = React.createClass({
  contextTypes: {
  		router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return({
      username: "",
      password: ""
    });
  },

  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount(){
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  redirectIfLoggedIn(){
    if (SessionStore.isUserLoggedIn()) this.context.router.push("/");
  },

  handleChange(property, event){
    return (event) => this.setState({ [property]: event.target.value });
  },

  handleSubmit(event){
    event.preventDefault();
    SessionActions.login({
      username: this.state.username,
      password: this.state.password
    },
      this.props.closeModal
    );
  },

  guestSignin(event){
    event.preventDefault();
    SessionActions.login({
      username: "Guest",
      password: "password"
    },
      this.props.closeModal
    );
  },

  errors(){
    const errors = ErrorStore.errors("login");
    const messages = errors.map((errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul className="sign-in-errors">{ messages }</ul>;
  },

  render(){
    return(
      <div className="login-form-container">
        <form className="login-form" onSubmit={ this.handleSubmit }>
          <h1>Sign in to Nformd and help build a more powerful electorate</h1>

          { this.errors() }


          <input type="text"
            placeholder="Username"
            onChange={ this.handleChange("username") }
            value={ this.state.username } />
          <br></br>

          <input type="password"
            placeholder="Password"
            onChange={ this.handleChange("password") } />
          <br></br>

          <br></br>
          <input type="submit" value="Sign In" />
        </form>

        <button
          className="sign-in-button login-form"
          onClick={ this.guestSignin } >
          Sign In as Guest
        </button>

        <button
          className="sign-in-button login-form"
          onClick={ this.props.toggleForm } >
          Sign Up
        </button>
      </div>
    );
  }
});

module.exports = LoginForm;
