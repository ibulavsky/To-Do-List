import React from "react";
import HeaderPage from "./ui/header/HeaderPage"
import {Layout} from "antd"
import WishesListsContainer from "./ui/listsContent/WishesListsContainer"

const Main = () => {
    return (
        <>
            <Layout>
                <HeaderPage/>
                <WishesListsContainer/>
            </Layout>
        </>
    )
}

export default Main
