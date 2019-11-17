import {List} from 'antd';
import React from "react"
import {connect} from "react-redux"

const WishesListsDisplay = (props) => {
    const lists = props.lists.map(l => (
            <>
                <h3 style={{marginBottom: 16}}>{`${l.id} - ${l.name}`}</h3>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={l.wishes}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </>
        )
    )


    return (
        <>
            {lists}
        </>
    )
}

const mapStateToProps = (store) => ({
    lists: store.addListsForm.wishesLists
})

export default connect(mapStateToProps, null)(WishesListsDisplay)
