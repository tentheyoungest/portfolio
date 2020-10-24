import React, { Component } from 'react';
import Modal from 'react-modal';
import data from '../Data';

import ItemTitle from '../components/ItemTitle';
import ItemDesc from '../components/ItemDesc';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioTabs from '../components/PortfolioTabs';

const { portfolioDesc, portfolios } = data;

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
    console.log('handleCloseModal: ', this);
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  
  render () {
    // const { portfolioDesc, portfolios } = data;
    //  {console.log({data})
    return (
      <div>
        <button className="modal-btn" onClick={this.handleOpenModal}>Details</button>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="modal"
           overlayClassName="overlay"
           ariaHideApp={false}
           onRequestClose={this.handleCloseModal}
        >{this.props.children}
          <div className="modal-container">
            <span className="portfolio-icon" onClick={this.handleCloseModal}><i class="fas fa-times"></i></span>
            {/* {portfolios.filter(item => item.type === 'Product Catalogue').map((filteredItem, index) =>
              <div key={filteredItem.title}>
                <ItemTitle>{filteredItem.title}</ItemTitle>
                <ItemDesc>{filteredItem.description}</ItemDesc>
                <ItemDesc>{filteredItem.year} - {filteredItem.status}</ItemDesc>
                <p className="portfolio-icon-group">
                    {filteredItem.textStacks.map((textStack, index) =>
                    <span className="portfolio-icon" key={index}>
                    <i className={textStack.icon} />
                    </span>
                    )}
                </p>
              </div>
            )} */}
            {props.children}
          </div>
        
        </Modal>
      </div>
    );
  }
}

const props = {};

// ReactDOM.render(<ModalContainer {...props} />, document.getElementById('root'))
export default ModalContainer;