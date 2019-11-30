import React from "react"

const ListContainer = (props) => {
    return (
        <>
            <span style={{}}>
                {props.item.title} - priority: {props.item.priority}
            </span>

        </>
    )
}

export default ListContainer
