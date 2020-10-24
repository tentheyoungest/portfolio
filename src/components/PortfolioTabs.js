import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioTab from '../components/PortfolioTab';

class PortfolioTabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="portfolio-tabs">
                <ul className="portfolio-tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <PortfolioTab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ul>
                <div className="portfolio-tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default PortfolioTabs;
