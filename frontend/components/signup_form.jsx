const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const SignUpForm = React.createClass({
  getInitialState(){
    return({
      email: "",
      username: "",
      password: "",
      confPassword: ""
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
    if (this.state.password === this.state.confPassword){
      SessionActions.signup(this.state);
    } else {
      // TODO: Throw error that confPassword doesn't match
    }
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
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={ this.handleSubmit }>
          <h1>{ thisPage }</h1>

          <input type="text"
            placeholder="Email Address"
            onChange={ this.handleChange("email") } />
          <br></br>

          <input type="text"
            placeholder="Desired Username"
            onChange={ this.handleChange("username") } />
          <br></br>

          <input type="password"
            placeholder="Password"
            onChange={ this.handleChange("password") } />
          <br></br>

          <input type="password"
            placeholder="Confirm Password"
            onChange={ this.handleChange("confPassword") } />
          <br></br>

          <br></br>
          <input type="submit" value="Create Account" /> or { navLink }
        </form>
      </div>
    );
  }
});

module.exports = SignUpForm;
