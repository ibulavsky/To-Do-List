import React from "react"
import {Checkbox} from 'antd'
import styles from './listContent.module.css'

const ListContent = (props) => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <span className={styles.listContainer} >
                <Checkbox onChange={onChange}> </Checkbox>
                <article>{props.item.title} - priority: {props.item.priority}</article>
            </span>

        </>
    )
}

export default ListContent
