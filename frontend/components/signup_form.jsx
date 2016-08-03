const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignUpForm = React.createClass({
  contextTypes: {
  		router: React.PropTypes.object.isRequired
  },

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
    if (this.state.password === this.state.confPassword){
      SessionActions.signup(this.state);
    } else {
      // TODO: Throw error that confPassword doesn't match
    }
  },

  errors(){
    const errors = ErrorStore.errors("signup");
    const messages = errors.map((errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul>{ messages }</ul>;
  },

  render(){
    return(
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={ this.handleSubmit }>
          <h1>Sign Up</h1>

          { this.errors() }

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
          <input type="submit" value="Sign Up" /> or
        </form>
        <button onClick={ this.props.toggleForm } >Sign In</button>
      </div>
    );
  }
});

module.exports = SignUpForm;
