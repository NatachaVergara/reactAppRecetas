import React from 'react';




const CuerpoReceta = ({ titulo, img, tiempoCoccion, ingredients, url }) => {

    console.log(tiempoCoccion)
    return (
        <div>

            <div>
                <div className="card card border-danger mb-3">
                    <h3 className="card-header text-center"> {titulo} </h3>
                    <div className="card-body align-self-center">
                        <img src={img} alt="MDN" className="rounded-1" style={{ width: "250px" }} />
                    </div>
                   
                    <ol className="p-5 text-center list-unstyled">
                        <h5>Ingredientes</h5>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text} </li>
                        ))}
                    </ol>
                    <div className="card-body">
                        <a href={url} className="card-link text-decoration-none ">Ver pasos</a>

                    </div>

                </div>

            </div>







            {/* <div className="card m-auto mb-5 w-100">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{titulo}</h4>
                            <span className="card-text">
                                <ol>
                                    <h5>Ingredientes</h5>
                                    {ingredients.map(ingredient => (
                                        <li>{ingredient.text} </li>
                                    ))}
                                </ol>
                            </span>
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Ir a pasos</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default CuerpoReceta
