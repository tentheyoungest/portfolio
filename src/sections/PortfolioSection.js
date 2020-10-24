import React, { Component } from 'react';
import Title from '../components/Title';
import data from '../Data';

import ItemTitle from '../components/ItemTitle';
import ItemDesc from '../components/ItemDesc';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioTabs from '../components/PortfolioTabs';
import ModalContainer, {handleOpenModal} from '../components/ModalContainer';

const { portfolioDesc, portfolios } = data;

const PortfolioSection = () =>
     <section id='portfolio' className='section-container-full'>
          <div className="container">
               <div className="row heading-light">
                    <Title>Portfolio</Title>
               </div>
               <div className="inner-section-full">
                    <div className="col-2"> 
                         <div className="portfolio-tab">                 
                                   <PortfolioTabs> 
                                   <div label="All" > 
                                    {portfolios.map((item, index) =>
                                          <PortfolioCard className="portfolio-card-item" key={index}>                            
                                             <div key={item.index}>
                                                  <img className="portfolio-image" src={item.img.list[0]} alt={item.title} />
                                                  <div>     
                                                       <ModalContainer />
                                                  </div>
                                                  {/* <ItemTitle>{item.title}</ItemTitle>
                                                  <ItemDesc>{item.description}</ItemDesc>
                                                  <ItemDesc>{item.year} - {item.status}</ItemDesc>
                                                  <p className="portfolio-icon-group">
                                                       {item.textStacks.map((textStack, index ) =>
                                                       <span className="portfolio-icon" key={index}>
                                                       <i className={textStack.icon} />
                                                       </span>
                                                      )}
                                                  </p> */}
                                             </div>
                                        </PortfolioCard>
                                   ) } 
                                   </div> 
                                   <div label="E-commerce"> 
                                   {portfolios.filter(item => item.type === 'E-commerce').map((filteredItem, index) => 
                                        <PortfolioCard className="portfolio-card-item" key={index}>
                                             <div key={filteredItem.index}>
                                                  <img className="portfolio-image" src={filteredItem.img.list[0]} alt={filteredItem.title} />
                                                  <div>    
                                                       <ModalContainer />
                                                  </div>
                                             {/* <ItemTitle>{filteredItem.title}</ItemTitle>
                                             <ItemDesc>{filteredItem.description}</ItemDesc>
                                             <ItemDesc>{filteredItem.year} - {filteredItem.status}</ItemDesc>
                                             <p className="portfolio-icon-group">
                                                  {filteredItem.textStacks.map((textStack, index) =>
                                                  <span className="portfolio-icon" key={index}>
                                                  <i className={textStack.icon} />
                                                  </span>
                                                  )}
                                             </p> */}
                                             </div>
                                        </PortfolioCard>
                                   )}
                                   </div>
                                   <div label="Product Catalogue"> 
                                    {portfolios.filter(item => item.type === 'Product Catalogue').map((filteredItem, index) =>
                                        <PortfolioCard className="portfolio-card-item" key={index}>
                                             <div key={filteredItem.index}>
                                             <img className="portfolio-image" src={filteredItem.img.list[0]} alt={filteredItem.title} />
                                             <div>     
                                                  <ModalContainer />
                                             </div>
                                             {/* <ItemTitle>{filteredItem.title}</ItemTitle>
                                             <ItemDesc>{filteredItem.description}</ItemDesc>
                                             <ItemDesc>{filteredItem.year} - {filteredItem.status}</ItemDesc>
                                             <p className="portfolio-icon-group">
                                                  {filteredItem.textStacks.map((textStack, index) =>
                                                  <span className="portfolio-icon" key={index}>
                                                  <i className={textStack.icon} />
                                                  </span>
                                                  )}
                                             </p> */}
                                             </div>
                                        </PortfolioCard>
                                   )}
                                   </div>
                                   <div label="Informational"> 
                                    {portfolios.filter(item => item.type === 'Informational').map((filteredItem, index) =>
                                        <PortfolioCard className="portfolio-card-item" key={index}>
                                             <div key={filteredItem.index}>
                                             <img className="portfolio-image" src={filteredItem.img.list[0]} alt={filteredItem.title} />
                                             <div>     
                                                  <ModalContainer />
                                             </div>
                                             
                                                  {/* <ItemTitle>{filteredItem.title}</ItemTitle>
                                                  <ItemDesc>{filteredItem.description}</ItemDesc>
                                                  <ItemDesc>{filteredItem.year} - {filteredItem.status}</ItemDesc>
                                                  <p className="portfolio-icon-group">
                                                       {filteredItem.textStacks.map((textStack, index) =>
                                                       <span className="portfolio-icon" key={index}>
                                                       <i className={textStack.icon} />
                                                       </span>
                                                       )}
                                                  </p> */}
                                             </div>
                                        </PortfolioCard>
                                   )}
                                   </div>
                              </PortfolioTabs>
                              
                         </div>
                    </div>         
               </div>
          </div>
     </section>
  
export default PortfolioSection;
