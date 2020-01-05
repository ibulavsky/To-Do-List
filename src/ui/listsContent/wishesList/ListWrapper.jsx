import {Icon, Input, List} from "antd"
import React, {useEffect, useState} from "react"
import Wish from "./ListContent/Wish"
import ListHeader from "./ListHeader/ListHeader"
import ListFooter from "./ListFooter/ListFooter"
import styles from './listWrapper.module.css'
import {useDispatch} from "react-redux"
import {deleteWishesList, updateWishesList} from "../../../bll/ListsReducer"

const ListWrapper = ({l, ...props}) => {
    const [isInputShow, setInputShow] = useState(false)
    const [listTitle, changeListTitle] = useState(l.name)
    const [filterValue, changeFilter] = useState("All")
    const [myWishes, changeWishes] = useState(l.wishes)

    console.log('render', myWishes, 'props: ', l.wishes)

    const onChangeFilter = (filter) => {
        changeFilter(filter)
    }

    const wishes = myWishes.filter(w => {
        switch (filterValue) {
            case "All":
                return true;
            case "Active":
                return !w.status;
            case "Completed":
                return w.status;
            default:
                return true
        }
    })

    const dispatch = useDispatch()
    // component did update
    useEffect(() => {
        console.log('update')
        changeWishes(l.wishes)
    }, [l.wishes])

    useEffect(() => {
        changeListTitle(l.name)
    }, [l.name])

    useEffect(() => {
        saveState()
    }, [myWishes])

    // component did mount, will unmount
    useEffect(() => {
        console.log('restore')
        restoreState()
        return () => {
            console.log('unmont')
        }
    }, [])


    const saveState = () => {
        // переводим объект в строку
        let stateAsString = JSON.stringify(myWishes);
        // сохраняем нашу строку в localStorage под ключом "our-state"
        localStorage.setItem("our-state-" + l.id, stateAsString);
        console.log('save', myWishes)
    };

    const restoreState = () => {
        // объявляем наш стейт стартовый
        let wishesArr = [];
        // считываем сохранённую ранее строку из localStorage
        let stateAsString = localStorage.getItem("our-state-" + l.id);
        // а вдруг ещё не было ни одного сохранения?? тогда будет null.
        // если не null, тогда превращаем строку в объект
        if (stateAsString != null) {
            wishesArr = JSON.parse(stateAsString);
            // устанавливаем стейт (либо пустой, либо восстановленный) в стейт
            changeWishes(wishesArr)
        }
    };

    const deleteList = () => {
        dispatch(deleteWishesList(l.id))
    }

    const updateList = () => {
        dispatch(updateWishesList(l.id, {name: listTitle}))
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
                            <h3 className={styles.title} style={{}}>{`${l.id} - ${l.name}`}</h3>
                            <Icon type="edit" className={styles.icon} onClick={() => setInputShow(true)}/>
                            <Icon type="delete" className={styles.icon} onClick={deleteList}/>
                        </>
                    }
                </header>
                <List
                    header={<ListHeader saveWishes={saveState} listId={l.id}/>}
                    footer={<ListFooter filterValue={filterValue} changeFilter={onChangeFilter}/>}
                    bordered
                    dataSource={wishes}
                    renderItem={item => (
                        <List.Item>
                            <Wish listId={l.id} wishItem={item}/>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default ListWrapper
