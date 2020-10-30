import React from 'react';
import Modal from 'react-modal';

class ModalContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <button className="modal-btn" onClick={this.handleOpenModal}>Details</button>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Portfolio Modal"
           className="modal"
           overlayClassName="overlay"
           ariaHideApp={false}
           onRequestClose={this.handleCloseModal}
        >
          <span className="portfolio-icon" onClick={this.handleCloseModal}><i className="fas fa-times"></i></span>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default ModalContainer;