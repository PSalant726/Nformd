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

  checkPasswordConfMistmach(){
    if (this.state.password !== this.state.confPassword){
      return({
        border: '1px solid red',
        borderRadius: '2px'
      });
    } else {
      return({});
    }
  },

  handleSubmit(event){
    event.preventDefault();
    SessionActions.signup({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    },
      this.props.closeModal
    );
  },

  errors(){
    let errors = ErrorStore.errors("signup");
    // if (this.state.password !== this.state.confPassword){
    //   errors.push("Password and Confirm Password fields must match");
    // }
    const messages = errors.map((errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul className="sign-in-errors">{ messages }</ul>;
  },

  render(){
    return(
      <div className="signup-form-container">
        <form className="login-form" onSubmit={ this.handleSubmit }>
          <h1>Create an Nformd Account</h1>

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
            onChange={ this.handleChange("password") }
            style={ this.checkPasswordConfMistmach() } />
          <br></br>

          <input type="password"
            placeholder="Confirm Password"
            onChange={ this.handleChange("confPassword") }
            style={ this.checkPasswordConfMistmach() } />
          <br></br>

          <br></br>
          <input
            type="submit"
            className="sign-up-button"
            value="Sign Up" />
        </form>

        <button
          className="sign-up-button login-form"
          onClick={ this.props.toggleForm } >
          Sign In
        </button>
      </div>
    );
  }
});

module.exports = SignUpForm;
