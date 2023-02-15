import './item.css'
import { Link } from 'react-router-dom';

const Item = ({data}) => {

    return (
        <div className='contenedor'>
            <h1>Producto: {data.title}</h1>
            <img className="img" src={data.image} alt="prenda"/>
            <br></br>
            <Link to={`/item/${data.id}`}><button className='boton'>Ver detalle</button></Link>
        </div>
    )
}


export default Item;