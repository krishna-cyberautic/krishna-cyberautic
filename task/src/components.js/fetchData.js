import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {ShowData} from './showData';
export const FetchData = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
     axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
     .then(response=>setData(response.data))
     .catch(error=>console.log(error.message))
     
    },[data])
    return (
        <>
       <ShowData data={data}/>
        </>
    )
}
