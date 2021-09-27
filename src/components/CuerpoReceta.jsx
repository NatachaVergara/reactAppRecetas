import React from 'react';



const CuerpoReceta = ({ titulo, img, tiempoCoccion, dietaLabel, ingredients, url }) => {
    return (
        <div>
            <div className="card m-auto mb-5 w-100">
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
            </div>
        </div>
    )
}

export default CuerpoReceta
