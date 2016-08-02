const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const LoginForm = React.createClass({
  getInitialState(){
    return({
      username: "",
      password: ""
    });
  },

  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount(){
    this.sessionListener.remove();
  },

  redirectIfLoggedIn(){
    if (SessionStore.isUserLoggedIn()) this.context.router.push("/");
  },

  handleChange(property, event){
    return (event) => this.setState({ [property]: event.target.value });
  },

  handleSubmit(event){
    event.preventDefault();
    SessionActions.login(this.state);
  },

  formType(){
    return this.props.location.pathname.slice(1);
  },

  render(){
    let navLink;
    let thisPage;
    if (this.formType() === "login"){
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

          <input type="text"
            placeholder="Username"
            onChange={ this.handleChange("username") } />
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
