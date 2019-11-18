import {List} from "antd"
import React from "react"
import Wish from "./wishesList/Wish"
import AddWishContainer from "./wishesList/WishContainer"

const WishesList = (props) => {
    return (
        <>
            <div style={{width: "500px"}}>
                <h3 style={{marginBottom: 16}}>{`${props.l.id} - ${props.l.name}`}</h3>
                <List
                    header={<AddWishContainer listId={props.l.id}/>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={props.l.wishes}
                    renderItem={item => (
                        <List.Item>
                            <Wish item={item}/>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default WishesList
