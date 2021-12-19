import React, { useEffect, useState } from 'react'
import '../App.css';
import CuerpoReceta from './cardItem';
import Api from '../Api/Api'
import Header from './Header';


export default function RecetasContainer() {
    const [recetas, setRecetas] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [query, setQuery] = useState('')

    const getRecetas = async () => {
        await Api({ query, setRecetas })

    }

    useEffect(() => {
        getRecetas();
    
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
            <main className="container-fluid mt-5 pt-5">
                <div className="row row-cols-md-3 ">
                    {recetas.map((receta, index) => (
                        <CuerpoReceta
                            key={index}
                            titulo={receta.recipe.label}
                            img={receta.recipe.image} tiempoCoccion={receta.recipe.totalTime}
                            ingredients={receta.recipe.ingredients} url={receta.recipe.url}

                        />
                    ))}
                </div>
            </main>
        </div>
    )
}
