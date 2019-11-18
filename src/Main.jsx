import React from "react";
import HeaderPage from "./ui/header/HeaderPage"
import {Layout} from "antd"
import WishesListsDisplay from "./ui/listsContent/WishesListsDisplay"

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
