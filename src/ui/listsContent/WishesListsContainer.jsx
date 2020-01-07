import React, {useEffect} from "react"
import ListWrapper from "./wishesList/ListWrapper"
import {useDispatch, useSelector} from "react-redux"
import {useLocalStorage} from "../common/useLocalStorage"
import {restoreStateList} from "../../bll/ListsReducer"

const WishesListsContainer = () => {

    const dispatch = useDispatch()

    const lists = useSelector((store) => store.lists.wishesLists)

    const [wishesLists, setLists] = useLocalStorage('Lists', lists);

    console.log(lists, wishesLists)
    // // if restored from local storage, must be dispatched into State
    // if (wishesLists.length > lists.length) {
    //     console.log(wishesLists)
    //
    // }
    //
    useEffect(() => {
        dispatch(restoreStateList(wishesLists))
    }, [])

    useEffect(() => {
        // if (lists.length !== 0) {
        // debugger
        setLists(lists)
        // }
    })

    const listsArr = wishesLists.map((l) => {
        if (l) {
            return <ListWrapper key={l.id} l={l}/>
        }
    })

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {listsArr}
        </div>
    )
}

export default WishesListsContainer;
