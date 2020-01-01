import React, {useState} from "react"
import {Checkbox, Icon, Input} from 'antd'
import styles from './listContent.module.css'
import {useDispatch} from "react-redux"
import {deleteWish, updateWish} from "../../../../bll/ListsReducer"

const ListContent = (props) => {

    const [isChangeModeShow, setChangeModeShow] = useState(false)
    const [wishTitle, changeWishTitle] = useState(props.item.title)
    const [wishStatus, changeWishStatus] = useState(props.item.status)

//redux
    const dispatch = useDispatch();

    const onUpdateWish = () => {
        dispatch(updateWish(props.listId, props.item.id, {title: wishTitle}))
        setChangeModeShow(false)
    }

    const onDeleteWish = () => dispatch(deleteWish(props.listId, props.item.id))


    const onChangeWishStatus = (e) => {
        changeWishStatus(e.target.checked)
        dispatch(updateWish(props.listId, props.item.id, {status: wishStatus}))
    }

    return (
        <>
            <span className={styles.listContainer}>
                <>
                {isChangeModeShow ? <>
                        <Input placeholder="Wish name" value={wishTitle}
                               autoFocus
                               onChange={(e) => changeWishTitle(e.currentTarget.value)}
                               onPressEnter={onUpdateWish}
                        />
                        <Icon type="check-circle" className={styles.icon} onClick={onUpdateWish}/>
                        <Icon type="undo" className={styles.icon} onClick={() => setChangeModeShow(false)}/>
                    </>
                    : <>
                        <Checkbox checked={wishStatus} onChange={(e) => onChangeWishStatus(e)}> </Checkbox>
                        <article>{props.item.title} - priority: {props.item.priority}</article>
                        <Icon type="edit" className={styles.icon} onClick={() => setChangeModeShow(true)}/>
                        <Icon type="delete" className={styles.icon} onClick={onDeleteWish}/>
                    </>
                }
                </>
            </span>

        </>
    )
}

export default ListContent
