import React from 'react';
// import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.warn('[Modal] did update');
  }

  render() {
    return (
      <Aux>
    <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0',
        }}>
        {this.props.children}
      </div>
    </Aux>);
  }
}

// modal.propTypes = {}

export default Modal;
