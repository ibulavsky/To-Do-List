import {Button, Icon, List} from "antd"
import React from "react"
import ListContent from "./ListContent/ListContent"
import ListHeader from "./ListHeader/ListHeader"
import ListFooter from "./ListFooter/ListFooter"
import styles from './listWrapper.module.css'

const ListWrapper = (props) => {

    const deleteList = () => {
        props.deleteWishesList(props.l.id)
    }

    return (
        <>
            <div className={styles.container}>
                <header className={styles.titleWrap}>
                    <h3 className={styles.title} style={{}}>{`${props.l.id} - ${props.l.name}`}</h3>
                    <Icon type="edit" className={styles.editIcon} />
                    <Icon type="delete" className={styles.deleteIcon} onClick={deleteList}/>

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
