import React, { useContext, useState, useEffect } from 'react'

const fetchDataContext = React.createContext()

export function useDataFetch() {
    return useContext(fetchDataContext)
}

export function DataProvider({ children }) {

    let baseUrl = `https://api.tvmaze.com/search/shows?q=all`

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]); 
    const [searchResult, setSearchData] = useState();


    useEffect(() => {

        async function fetchData() {
            try {
               await fetch(baseUrl)
                    .then(data => data.json())
                    .then(data => setData(data))

            } catch {
                console.log('dwadawdawdawd')
            }
        }
        
        fetchData()

    }, [])

    function getAllData() {

        return data
    }

    async function searchData(e) {

        e.preventDefault()
        let endpoint = e.target.value;
        let searchReasult = `https://api.tvmaze.com/search/shows?q=${endpoint}`
        console.log(endpoint)

        try {
            await fetch(searchReasult)
                .then(data => data.json())
                .then(data => setSearchData(data))


        } catch {
            console.log('dwadawdawdawd')
        }
        console.log(data)
        return searchData
    }




    const value = {
        getAllData,
        searchData,
        data
    }

    return <fetchDataContext.Provider value={value}>
        {children}
    </fetchDataContext.Provider>
}

