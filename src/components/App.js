import React, { useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../config'

const App = () => {

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(`${baseUrl}/api/v1/books`);
            console.log(data);
        }
        search();
    }, [])


    return (
        <div>
            App
        </div>
    )
}

export default App;