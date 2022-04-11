import React from "react";

export const StorageContext = React.createContext()

export function StorageProvider(props){
    const [currentPage, setCurrentPage] = React.useState("home")

    let store = {
        currentPage: currentPage,
        setCurrentPage: setCurrentPage
    }

    return (
        <StorageContext.Provider value={store}>
            {props.children}
        </StorageContext.Provider>
    )
}