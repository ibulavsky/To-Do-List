import React from "react";
import HeaderPage from "./header/ui/HeaderPage"
import {Layout} from "antd"
import WishesListsDisplay from "./listsContent/wishesListsDisplay"

const Main = () => {
    return (
        <>
            <Layout>
                <HeaderPage/>
                <WishesListsDisplay/>
            </Layout>
        </>
    )
}

export default Main
