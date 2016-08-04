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
    let formType;
    if (this.state.login) {
      formType = <LoginForm closeModal={ this.props.closeModal } toggleForm={ this.toggleForm } />;
    } else {
      formType = <SignupForm closeModal={ this.props.closeModal } toggleForm={ this.toggleForm } />;
    }

    return(
      <div>

        <Modal
          isOpen={ this.props.modalOpen }
          onRequestClose={ this.props.closeModal }
          style={ ModalStyle }>

          <div className="modal-logo group"><h1>Nformd</h1></div>
          { formType }

        </Modal>
      </div>
    );
  }
});

module.exports = FormModal;
