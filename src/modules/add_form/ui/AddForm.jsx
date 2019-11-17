import {Button, Input} from "antd"
import React from "react"

const AddForm = (props) => {

    return (
        <>
            <Input defaultValue={props.listName}
                   placeholder="Write here list name"
                   onChange={props.changeListName}
                   style={{width:'200px'}}/>
            <Button key="1" onClick={props.addList}>Add List</Button>
        </>
    )
}

export default AddForm
