import React from "react";
import './Css-Componentes/CardEnlace.css';

interface CardEnlaceProps {
    imagen: string;
    titulo: string;
    texto: string;
    enlace: string;
}

function CardEnlace ({imagen, titulo, texto, enlace} : CardEnlaceProps) {

    return(
        <div className="card mb-3" style={{width: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{texto}</p>
                        <a href={enlace} className="btn btn-primary">Ir</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardEnlace;