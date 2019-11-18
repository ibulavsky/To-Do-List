import React, {Component} from "react"
import AddForm from "../../common/AddForm"
import {connect} from "react-redux"
import {addWishesList} from "../../../bll/ListsReducer"

class AddListsFormContainer extends Component {

    state = {
        itemName: '',
    }

    addFormCallbacks = {
        addItem: () => {
            const newWishList = {
                name: this.state.itemName,
                wishes: [{title: 'added', priority: 2, id: 2 }],
                id: Math.ceil(Math.random() * 10)
            }
            this.props.addWishesList(newWishList)
        },
        changeItemName: (e) => {
            this.setState(
                {
                    itemName: e.currentTarget.value
                }
            )
        }
    }

    render() {
        return (
            <>
                <AddForm item={'list'} itemName={this.state.itemName} {...this.addFormCallbacks} />
            </>
        )
    }
}

export default connect(null, {addWishesList})(AddListsFormContainer)
