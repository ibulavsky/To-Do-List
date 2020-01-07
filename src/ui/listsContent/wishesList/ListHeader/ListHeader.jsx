import React, {Component} from "react"
import AddForm from "../../../common/AddForm"
import {connect} from "react-redux"
import {addWish} from "../../../../bll/ListsReducer"
import styles from './listHeader.module.css'

class ListHeader extends Component {
    state = {
        wishName: '',
    }

    addFormCallbacks = {
        addItem: () => {
            const newWish = {
                title: this.state.wishName,
                priority: 2,
                id: +new Date()
            };
            this.props.addWish(newWish, this.props.listId);
            this.setState({wishName: ''})
        },
        onChangeItemName: (e) => {
            this.setState(
                {
                    wishName: e.currentTarget.value
                }
            )
        }
    }

    render() {
        return (
            <div className={styles.listHeader}>
                <AddForm item={'wish'} itemName={this.state.wishName} {...this.addFormCallbacks} />
            </div>)
    }
}

export default connect(null, {addWish})(ListHeader)
