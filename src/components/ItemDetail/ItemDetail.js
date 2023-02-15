import { Link } from 'react-router-dom';
import './itemDetail.css'

const ItemDetail =({data})=>{

    return(
        <div className='contenedor'>
            <h1>Descripcion: {data.title}</h1>
            <h2>Precio: usd{data.price}</h2>
            <img className="img" src={data.image} alt="prenda"/>
            <br></br>
            <Link to={`/`}><button>al inicio</button></Link>
            <Link to={`/productos`}><button>productos</button></Link>
        </div>
    )
}


export default ItemDetail;


