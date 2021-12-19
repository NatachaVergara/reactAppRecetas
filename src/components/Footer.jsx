import React from 'react'
import '../App.css'


const Footer = () => {
    return (
        <footer className="py-3 my-4 container ">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item "><a href="https://nvergaraportfolio.netlify.app/" target="_blank" rel="noreferrer"   className="nav-link px-2 ">Potfolio</a></li>
                <li className="nav-item"><a href="https://proyectosdejs.netlify.app/" target="_blank" rel="noreferrer" className="nav-link px-2">Proyectos JS</a></li>
                <li className="nav-item"><a href="https://mishtmls.netlify.app/" target="_blank" rel="noreferrer" className="nav-link px-2 ">Proyectos HTML/CSS</a></li>
                {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li> */}
            </ul>
            <p className="text-center text-dark ">© Natacha Vergara, {new Date().getFullYear()} </p>
        </footer>
    )
}

export default Footer
