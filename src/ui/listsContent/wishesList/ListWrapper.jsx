import {Button, Icon, Input, List} from "antd"
import React, {useState} from "react"
import ListContent from "./ListContent/ListContent"
import ListHeader from "./ListHeader/ListHeader"
import ListFooter from "./ListFooter/ListFooter"
import styles from './listWrapper.module.css'

const ListWrapper = (props) => {
    const [isInputShow, setInputShow] = useState(false)
    const [listTitle, changelListTitle] = useState(props.l.name)

    const deleteList = () => {
        props.deleteWishesList(props.l.id)
    }

    const updateList = () => {
        props.updateWishesList(props.l.id, {name: listTitle})
        setInputShow(false)
    }

    return (
        <>
            <div className={styles.container}>
                <header className={styles.titleWrap}>
                    {isInputShow ? <>
                            <Input placeholder="List name" value={listTitle}
                                   onChange={(e) => changelListTitle(e.currentTarget.value)}/>
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
                            <ListContent item={item}/>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default ListWrapper
