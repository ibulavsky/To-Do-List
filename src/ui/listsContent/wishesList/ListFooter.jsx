import React from 'react';
import {Button, Icon, Typography} from "antd"

class ListFooter extends React.Component {

    state = {
        isHidden: false,
        filterValue: "All"
    };

    changeFilter = (filter) => {
        this.setState({filterValue: filter})
    }

    onAllFilterClick = () => {
        this.changeFilter("All")
    }
    onCompletedFilterClick = () => {
        this.changeFilter("Completed")
    }
    onActiveFilterClick = () => {
        this.changeFilter("Active")
    }
    onShowFiltersClick = () => {
        this.setState({isHidden: true})
    }
    onHideFiltersClick = () => {
        this.setState({isHidden: false})
    }

    render = (props) => {

        let typeForAll = this.state.filterValue === "All" ? "primary" : "";
        let typeForCompleted = this.state.filterValue === "Completed" ? "primary" : "";
        let typeForActive = this.state.filterValue === "Active" ? "primary" : "";

        return (
            <div className="List-footer">
                {!this.state.isHidden && <div>
                    <Button key="11" onClick={this.onAllFilterClick} type={typeForAll}>ALL</Button>
                    <Button key="12" onClick={this.onCompletedFilterClick} type={typeForCompleted}>Completed</Button>
                    <Button key="13" onClick={this.onActiveFilterClick} type={typeForActive}>Active</Button>
                </div>
                }
                {!this.state.isHidden && <span onClick={this.onShowFiltersClick}>
                    <Icon type="backward"/>
                    <Typography code>hide</Typography>
                </span>}
                {this.state.isHidden &&
                <span onClick={this.onHideFiltersClick}> <Icon type="forward"/>
                    <Typography code>show</Typography> </span>}
            </div>
        );
    }
}

export default ListFooter
