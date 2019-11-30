import {List} from "antd"
import React from "react"
import ListContainer from "./ListContainer"
import ListHeader from "./ListHeader"
import ListFooter from "./ListFooter"

const WishesList = (props) => {
    return (
        <>
            <div style={{width: "500px"}}>
                <h3 style={{marginBottom: 16}}>{`${props.l.id} - ${props.l.name}`}</h3>
                <List
                    header={<ListHeader listId={props.l.id}/>}
                    footer={<ListFooter />}
                    bordered
                    dataSource={props.l.wishes}
                    renderItem={item => (
                        <List.Item>
                            <ListContainer item={item}/>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default WishesList
