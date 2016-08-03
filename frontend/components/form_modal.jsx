const React = require('react');
const Modal = require('react-modal');
const ModalStyle = require('../../app/assets/javascripts/modal_style');
const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const FormModal = React.createClass({
  getInitialState(){
    return({
      login: true
    });
  },

  toggleForm(){
    if (this.state.login){
      this.setState({ login: false });
    } else {
      this.setState({ login: true });
    }
  },

  render(){
    let formType = this.state.login ? <LoginForm toggleForm={ this.toggleForm } /> : <SignupForm toggleForm={ this.toggleForm } />;

    return(
      <div>
        <Modal
          isOpen={ this.props.modalOpen }
          onRequestClose={ this.props.closeModal }
          style={ ModalStyle }>
          <button onClick={ this.props.closeModal }>Close</button>
          { formType }
        </Modal>
      </div>
    );
  }
});

module.exports = FormModal;
