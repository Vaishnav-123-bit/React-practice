import { useEffect, useState } from "react"



export default function InageSlider([url,limit]){
    const[image,setImage]=useState([])
    const[currentSlide,setCurrentSlide]=useState(0);
    const[loading,setLoading]=useState(false);
    const[errorMsg,setErrorMssg]=useState(null)

    async function fetchImage(getUrl){
        try{
            setLoading(true)
            const res=await fetch(getUrl)
            const data=await res.json();
            if(data){
                setImage(data)
                setLoading(false)
            }

        }catch(e){
            setErrorMssg(e.message)
            setLoading(false)

        }
    }

    useEffect(()=>{
        if(url!=="")fetchImage(url)
    },[url])


    if(loading){
        return <div>Loading ......</div>
    }
    if(errorMsg){
        return <div>error occured !</div>
    }
    
    return(
        <div className="container"></div>
    )
}