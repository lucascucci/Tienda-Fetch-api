import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [data,setData]= useState([])
    const {id}= useParams()
    useEffect(()=>{
        fetch ('https://fakestoreapi.com/products?sort=desc')
        .then ((response)=>(response.json()))
        .then ((data)=> setData(data.find((item)=>item.id ===parseInt(id))))

    },[id])
    console.log(data);


    return (
        <div>
            <ItemDetail data={data} key={data.id}/>
        </div>
    )
}

export default ItemDetailContainer;

