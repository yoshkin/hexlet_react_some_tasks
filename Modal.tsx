// @ts-check
/* eslint-disable react/static-property-placement */

import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Header = ({toggle, children}) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button onClick={toggle} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
    </button>
  </div>
);
const Body = ({children}) => <div className="modal-body">{children}</div>;
const Footer = ({children}) => <div className="modal-footer">{children}</div>;

export default class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const {isOpen, children} = this.props;
    const modalClasses = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });
    const styles = { display: isOpen ? 'block' : 'none' };

    return (
      <div className={modalClasses} style={styles} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
          {children}
          </div>
        </div>
      </div>
    );
  }
}
// END


//Component.tsx
// @ts-check

import React from 'react';
import Modal from './Modal.jsx';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { modal } = this.state;
    return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
