import React from "react"
import ListWrapper from "./wishesList/ListWrapper"
import {useSelector} from "react-redux"

const WishesListsContainer = () => {

    const lists = useSelector((store) => store.lists.wishesLists)

    const listsArr = lists.map((l, index) => <ListWrapper key={index} l={l}/>)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {listsArr}
        </div>
    )
}

export default WishesListsContainer;
