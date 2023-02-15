import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () =>{
const [data, setData]= useState([])
useEffect(()=>{
    fetch('https://fakestoreapi.com/products?sort=desc')
    .then((res)=> res.json())
    .then((res)=> setData(res))
    
},[])
console.log(data);
return (
    <ItemList data={data}/>
)
}


export default ItemListContainer;