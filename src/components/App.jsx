import React, { useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../config'
import Layout from "./layout/Layout";
import BookContainer from "./book/BookContainer";

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
            <Layout>
               <BookContainer />
            </Layout>
        </div>
    )
}

export default App;