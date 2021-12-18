import React from 'react';
import '../App.css'



const CuerpoReceta = ({ titulo, img, tiempoCoccion, ingredients, url, index }) => {

    return (
    

        <div>
            <div className="card card border-danger mb-3" key={index}>
                <h3 className="card-header text-center"> {titulo} </h3>
                <div className="card-body align-self-center">
                    <img src={img} alt="MDN" className="rounded-1 " style={{ width: "250px" }} />
                </div>
                <h5 className="text-center">Ingredientes</h5>
                <ol className="p-5 text-center list-unstyled">
                    
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text} </li>
                    ))}
                </ol>
                <div className="card-body">
                    <a href={url} className="card-link text-decoration-none ">Ver pasos</a>

                </div>

            </div>

        </div>

    
    )
}

export default CuerpoReceta
