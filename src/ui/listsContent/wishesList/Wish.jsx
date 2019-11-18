import React from "react"

const Wish = (props) => {
    return (
        <>
            <span style={{}}>
                {props.item.title} - priority: {props.item.priority}
            </span>

        </>
    )
}

export default Wish
