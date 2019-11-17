import React from "react";
import HeaderPage from "./pure_components/Header"
import AddFormContainer from "../../add_form/ui/AddFormContainer"

const HeaderPageContainer = () => {

    const stylesAnt = {
        border: '1px solid rgb(235, 237, 240)',
        padding: '24px',
    }

    const config = {
        extra: [<AddFormContainer/>]
    }

    return (
        <>
            <HeaderPage style={stylesAnt}
                        title={'My wish lists'}
                        subTitle={'What are you wanna from Santa?'}
                        {...config}/>
        </>
    )
}

export default HeaderPageContainer
