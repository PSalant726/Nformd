const React = require('react');
const Modal = require('react-modal');
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

  styleModal(){
    return({
      overlay : {
        backgroundColor : 'rgba(0,0,0,.6)',
        bottom          : 0,
        left            : 0,
        position        : 'fixed',
        right           : 0,
        top             : 0,
        zIndex          : 10
      },
      content : {
        border          : '1px solid #ccc',
        borderRadius    : '3px',
        left            : '50%',
        marginBottom    : '18px',
        marginTop       : '18px',
        padding         : '0px',
        position        : 'absolute',
        top             : '50%',
        transform       : 'translate(-50%, -50%)',
        maxHeight       : '820px',
        maxWidth        : '520px',
        minHeight       : '800px',
        minWidth        : '520px',
        zIndex          : 11,
      }
    });
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
          style={ this.styleModal() }>

          <div className="modal-logo group"><h1>Nformd</h1></div>
          { formType }

        </Modal>
      </div>
    );
  }
});

module.exports = FormModal;
