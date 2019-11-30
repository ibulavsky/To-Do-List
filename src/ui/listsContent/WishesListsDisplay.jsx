import React from "react"
import {connect} from "react-redux"
import WishesList from "./wishesList/WishesList"

const WishesListsDisplay = (props) => {
    const lists = props.lists.map(l => <WishesList l={l}/>)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {lists}
        </div>
    )
}

const mapStateToProps = (store) => ({
    lists: store.addListsForm.wishesLists
})

export default connect(mapStateToProps, null)(WishesListsDisplay)
