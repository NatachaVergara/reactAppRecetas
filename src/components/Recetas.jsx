import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import CuerpoReceta from './CuerpoReceta';


export default function RecetasApp() {
    const APP_ID = "7feadccc";
    const APP_KEY = "d7e990c52f68053030c0382c4e8437c2";

    const [recetas, setRecetas] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [query, setQuery] = useState('')


    const getRecetas = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`)
        const data = await res.json();
        setRecetas(data.hits)
        console.log(data)      

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
            <div className="container-fluid">
                <h1 className="mx-5 my-5 py-3 text-center bg-dark text-white">Buscá y encontrá tu receta</h1>
                <form onSubmit={obtenerBusqueda} className="d-flex flex-column">
                    <input className="form-control p-3 mb-5 w-75  m-auto"
                        type="search" value={buscar}
                        onChange={updateBusqueda}
                        placeholder="Search"
                        aria-label="Search" />
                    <button className="btn btn-danger w-50 m-auto mb-5" type="submit">Buscar</button>
                </form>
            </div>

            <div className="container-fluid">
                <div className="row row-cols-md-2">
                    {recetas.map((receta, index) => (
                        <CuerpoReceta
                            key={receta.recipe.index}
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
