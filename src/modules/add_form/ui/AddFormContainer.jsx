import React, {Component} from "react"
import AddForm from "./AddForm"

class AddFormContainer extends Component {

    state = {
        listName: '',
    }

    addFormCallbacks = {
        addList: () => {
            alert(this.state.listName)
        },
        changeListName: (e) => {
            this.setState(
                {
                    listName: e.currentTarget.value
                }
            )
        }
    }

    render() {
        return (
            <>
                <AddForm listName={this.state.listName} {...this.addFormCallbacks} />
            </>
        )
    }
}

export default AddFormContainer
