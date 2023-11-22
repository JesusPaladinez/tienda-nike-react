import '../App.css';

const CardComponent = ({image, title, price, description}) => {
    return (
        <>
        <div className='cardContainer'>
            <div className="card col-3">
                <img src={image}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <h3>{price}</h3>
            </div>
        </div>
          
        </>
    )
}

export default CardComponent;
