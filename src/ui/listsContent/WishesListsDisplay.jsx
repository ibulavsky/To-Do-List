import React from "react"
import {connect} from "react-redux"
import ListWrapper from "./wishesList/ListWrapper"
import {deleteWishesList} from "../../bll/ListsReducer"

const WishesListsDisplay = (props) => {
    const lists = props.lists.map(l => <ListWrapper deleteWishesList={props.deleteWishesList} l={l}/>)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {lists}
        </div>
    )
}

const mapStateToProps = (store) => ({
    lists: store.addListsForm.wishesLists
})

export default connect(mapStateToProps, {deleteWishesList})(WishesListsDisplay)
