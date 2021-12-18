import React, { useEffect, useState } from 'react'

import CuerpoReceta from './CuerpoReceta';
import Api from '../Api/Api'
import Header from './Header';


export default function RecetasApp() {
    
    const [recetas, setRecetas] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [query, setQuery] = useState('')


    const getRecetas = () => {
        Api({query, setRecetas})    

    }

    useEffect(() => {
        getRecetas()        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])


    const updateBusqueda = e => {
        setBuscar(e.target.value)
    }

    const obtenerBusqueda = e => {
        e.preventDefault();
        setQuery(buscar)       
        setBuscar('')
    }


    return (
        <div>
            <Header
                title="Buscá y encontrá tu receta"
                obtenerBusqueda={obtenerBusqueda}
                value={buscar}
                onChange={updateBusqueda}
                
            />
            <div className="container-fluid mt-5 pt-5">
                <div className="row row-cols-md-2">
                    {recetas.map((receta, index) => (
                        <CuerpoReceta
                            key={index}
                            titulo={receta.recipe.label}
                            img={receta.recipe.image} tiempoCoccion={receta.recipe.totalTime}
                            ingredients={receta.recipe.ingredients} url={receta.recipe.url}
                           
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
