import axios from "axios"

export const getdata=({category,limit})=>{
    return axios.get("https://meanbuy-server.onrender.com/data",{
        params:{
            category:category,
            _limit:limit
        }
    })
}

export const getid=({id})=>{
    return axios.get(`https://meanbuy-server.onrender.com/data?id=${id}`)
}

export const getcart=()=>{
    return axios.get("https://cart-server.onrender.com/data")
}

export const putcart=(data)=>{
    // console.log(data)
    return axios.post("https://cart-server.onrender.com/data",data).then((res)=>console.log(res))
}

export const rem=(data)=>{
    // console.log(data)
    return axios({
        method:"delete",
        baseURL:"https://cart-server.onrender.com/",
        url:`/data/${data}`
    })
} 
