/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = ({ title, obtenerBusqueda, value, onChange }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container d-flex justify-content-around">
                    <span className="navbar-brand" href="#">{title} </span>                                     
                        <form className="d-flex">
                            <input className="form-control mt-2 mt-md-0 me-sm-2 me-2" type="text"
                                value={value}
                                onChange={onChange}
                            />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={obtenerBusqueda} >Buscar</button>
                        </form>
                   
                </div>
            </nav>
        </header>
    )
}

export default Header
