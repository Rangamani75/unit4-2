import {useState,useEffect} from "react"
import axios from "axios"
export default function useFetch(url){
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    useEffect(()=>{
        if(!url) return
        setLoading(true)
        setError(null)
        setData(null)
        axios.get(url).then((res) => setData(res.data))
        .catch((err)=> setError(err.message))
        .finally(()=> setLoading(false))


    },[url])
    return {data,loading,error}



} 
