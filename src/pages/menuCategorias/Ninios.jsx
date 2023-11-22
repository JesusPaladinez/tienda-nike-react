import CardComponent from "../../components/CardComponent";
import { useState, useEffect } from "react";
import axios from "axios";

const Ninios = () => {
    const [product, setProduct] = useState([]);

    const urlAPI = 'https://fakestoreapi.com/products';

    useEffect(() => {
        const renderData = async () => {
            const data = await axios.get(urlAPI);
            console.log(data.data);
            setProduct(data.data);
        }
        renderData();
    }, [])

    return (
        <div className="d-flex flex-column">
            <h1 className="titlePage">Niños</h1>
            {
                product.length > 0 ? (
                    <div className='contenedorPrincipal'>
                        {
                            product.map(producto => (
                                <CardComponent
                                    key={producto.id}
                                    image={producto.image}
                                    title={producto.title}
                                    price={producto.price}
                                    description={producto.description}                        
                                />
                            ))
                        }
                    </div>
                ) : (
                    <h1 className="APIalert">No hay productos disponibles</h1>
                )
            }
        </div>
    );
}

export default Ninios;

