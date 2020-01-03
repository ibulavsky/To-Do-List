import React, {useEffect, useState} from "react"
import {Checkbox, Icon, Input, Select} from 'antd'
import styles from './listContent.module.css'
import {useDispatch} from "react-redux"
import {deleteWish, updateWish} from "../../../../bll/ListsReducer"

const ListContent = (props) => {

    const [isChangeModeShow, setChangeModeShow] = useState(false)
    const [wishTitle, changeWishTitle] = useState(props.item.title)
    const {Option} = Select;
    // console.log(`checked ${props.item.id} ${props.item.title} - ${props.item.priority} `)

    useEffect(() => {
        changeWishTitle(props.item.title)
    }, [props.item.title])

//redux
    const dispatch = useDispatch();

    const onPriorityChange = (value) => {
        dispatch(updateWish(props.listId, props.item.id, {priority: value}))
        console.log(`priority selected ${value} - id ${props.item.id}`);
    }
    const onUpdateWish = () => {
        dispatch(updateWish(props.listId, props.item.id, {title: wishTitle}))
        setChangeModeShow(false)
    }
    const onDeleteWish = () => dispatch(deleteWish(props.listId, props.item.id))
    const onChangeWishStatus = (e) => {
        dispatch(updateWish(props.listId, props.item.id, {status: (e.target.checked)}))
    }

    return (
        <>
            <span className={styles.listContainer}>
                <>
                {isChangeModeShow ? <>
                        <Input placeholder="Wish name" value={wishTitle}
                               autoFocus
                               onChange={(e) => changeWishTitle(e.currentTarget.value)}
                               onPressEnter={onUpdateWish}/>
                        <Icon type="check-circle" className={styles.icon} onClick={onUpdateWish}/>
                        <Icon type="undo" className={styles.icon} onClick={() => setChangeModeShow(false)}/>
                    </>
                    : <>
                        <Checkbox className={styles.check} checked={props.item.status}
                                  onChange={(e) => onChangeWishStatus(e)}> </Checkbox>
                        <article className={styles.text}>{props.item.title}</article>
                        <Select defaultValue={props.item.priority} style={{width: 120}} className={styles.priority}
                                onChange={(value) => onPriorityChange(value)}>
                            <Option value={3}>High</Option>
                            <Option value={2}>Medium</Option>
                            <Option value={1}>Low</Option>
                        </Select>
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
