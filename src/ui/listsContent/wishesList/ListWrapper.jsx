import {Icon, Input, List} from "antd"
import React, {useEffect, useState} from "react"
import Wish from "./ListContent/Wish"
import ListHeader from "./ListHeader/ListHeader"
import ListFooter from "./ListFooter/ListFooter"
import styles from './listWrapper.module.css'
import {useDispatch} from "react-redux"
import {deleteWishesList, updateWishesList} from "../../../bll/ListsReducer"

const ListWrapper = (props) => {
    const [isInputShow, setInputShow] = useState(false)
    const [listTitle, changeListTitle] = useState(props.l.name)

    const dispatch = useDispatch()

    useEffect(() => {
        changeListTitle(props.l.name)
    }, [props.l.name])


    const deleteList = () => {
        dispatch(deleteWishesList(props.l.id))
    }

    const updateList = () => {
        dispatch(updateWishesList(props.l.id, {name: listTitle}))
        setInputShow(false)
    }

    return (
        <>
            <div className={styles.container}>
                <header className={styles.titleWrap}>
                    {isInputShow ? <>
                            <Input placeholder="List name" value={listTitle}
                                   autoFocus
                                   onChange={(e) => changeListTitle(e.currentTarget.value)}
                                   onPressEnter={updateList}
                            />
                            <Icon type="check-circle" className={styles.icon} onClick={updateList}/>
                            <Icon type="undo" className={styles.icon} onClick={() => setInputShow(false)}/>
                        </>
                        : <>
                            <h3 className={styles.title} style={{}}>{`${props.l.id} - ${props.l.name}`}</h3>
                            <Icon type="edit" className={styles.icon} onClick={() => setInputShow(true)}/>
                            <Icon type="delete" className={styles.icon} onClick={deleteList}/>
                        </>
                    }
                </header>
                <List
                    header={<ListHeader listId={props.l.id}/>}
                    footer={<ListFooter/>}
                    bordered
                    dataSource={props.l.wishes}
                    renderItem={item => (
                        <List.Item>
                            <Wish listId={props.l.id} wishItem={item}/>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default ListWrapper
