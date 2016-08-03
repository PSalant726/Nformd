const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

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
    });
  },

  formType(){
    return this.props.location.pathname.slice(1);
  },

  errors(){
    const errors = ErrorStore.errors(this.formType());
    const messages = errors.map((errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul>{ messages }</ul>;
  },

  render(){
    let navLink;
    let thisPage;

    if (this.formType() === "login" || this.formType() === ""){
      navLink = <a href="#/signup">Create Account</a>;
      thisPage = "Sign In";
    } else {
      navLink = <a href="#/login">Log In</a>;
      thisPage = "Create Account";
    }

    return(
      <div className="login-form-container">
        <form className="login-form" onSubmit={ this.handleSubmit }>
          <h1>{ thisPage }</h1>

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
          <input type="submit" value="Sign In" /> or { navLink }
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
