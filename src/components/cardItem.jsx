import React from 'react';
import '../App.css'
// eslint-disable-next-line no-unused-vars
//import imgBG from '../img/imgBG.jpg'



const CuerpoReceta = ({ titulo, img, ingredients, url, index }) => {

    

    return (

        <div>
            <div className="card shadow mb-3" key={index} > 
                <h3 className="card-header text-center"> {titulo} </h3>
                               <div className="card-body align-self-center">
                    <img src={img} alt="MDN" className="rounded-1" style={{ width: "200px" }} />
                </div>
                
                <h5 className="text-center">Ingredientes</h5> 
                <ol className="p-5 text-center list-unstyled">
                    
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text} </li>
                    ))}
                </ol>
                <div className="card-body align-self-center">
                    <a href={url} className="card-link text-decoration-none ">Ver pasos</a>
                </div>

            </div>

        </div>

    
    )
}

export default CuerpoReceta
