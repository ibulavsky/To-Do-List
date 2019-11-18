import React from "react"
import {connect} from "react-redux"
import WishesList from "./WishesList"

const WishesListsDisplay = (props) => {
    const lists = props.lists.map(l => <WishesList l={l}/>)
    return (
        <>
            {lists}
        </>
    )
}

const mapStateToProps = (store) => ({
    lists: store.addListsForm.wishesLists
})

export default connect(mapStateToProps, null)(WishesListsDisplay)
