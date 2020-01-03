import React, {useState} from "react"
import AddForm from "../../common/AddForm"
import {useDispatch} from "react-redux"
import {addWishesList} from "../../../bll/ListsReducer"

const AddListsFormContainer = () => {

    const [itemName, changeItemName] = useState('')
    const dispatch = useDispatch()

    const addFormCallbacks = {
        addItem: () => {
            const newWishList = {
                name: itemName,
                wishes: [],
                id: Math.ceil(Math.random() * 10)
            }
            dispatch(addWishesList(newWishList));
            changeItemName('')
        },
        onChangeItemName: (e) => changeItemName(e.currentTarget.value)
    }

    return (
        <>
            <AddForm item={'list'} itemName={itemName} {...addFormCallbacks} />
        </>
    )
}

export default AddListsFormContainer
