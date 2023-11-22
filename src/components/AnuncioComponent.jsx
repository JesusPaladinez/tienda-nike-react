

const AnuncioComponent = () => {
    return (
        <>
        <div className="card text-bg-dark col-6 d-flex position-absolute top-50 start-50 translate-middle">
            <img src="/public/img/AnuncioJordan.webp" className="anuncio card-img" alt="Anuncio"/>
                <div className="card-img-overlay">
                    <h1 className="card-title">¡Las mejores ofertas para Navidad!</h1>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
        </div>
        </>
        
    );
}

export default AnuncioComponent;
