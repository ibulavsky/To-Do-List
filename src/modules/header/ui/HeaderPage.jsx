import React from "react";
import AddFormContainer from "../../addListsForm/ui/AddListsFormContainer"
import {PageHeader} from "antd"

const HeaderPage = () => {

    const stylesAnt = {
        border: '1px solid rgb(235, 237, 240)',
        padding: '24px',
    }

    const config = {
        extra: [<AddFormContainer/>]
    }

    return (
        <>
            <PageHeader style={stylesAnt}
                        title={'My wish lists'}
                        subTitle={'What are you wanna from Santa?'}
                        {...config}/>
        </>
    )
}

export default HeaderPage
