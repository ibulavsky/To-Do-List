import React, {Component} from "react"
import AddForm from "../../common/add_form/ui/AddForm"
import {connect} from "react-redux"
import {addWishesList} from "../bll/addListsReducer"

class AddListsFormContainer extends Component {

    state = {
        itemName: '',
    }

    addFormCallbacks = {
        addItem: () => {
            const newWishList = {
                name: this.state.itemName,
                wishes: ['some', 'paw'],
                id: Math.ceil(Math.random() * 10)
            };
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
                <AddForm itemName={this.state.itemName} {...this.addFormCallbacks} />
            </>
        )
    }
}

export default connect(null, {addWishesList})(AddListsFormContainer)
