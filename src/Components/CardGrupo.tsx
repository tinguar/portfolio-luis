import React from "react"


function CardGrupo () {
    return(
        <div className="card-group" style={{ width: '70rem' }}>
            <div className="card">
                <img src="./img/Javascript.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Javascript</h5>
                    <p className="card-text">Conocimiento básico en Javascript para el desarrollo de Apps Web, acompañado de conocimiento de HTML y Css</p>
                </div>
            </div>
            <div className="card">
                <img src="./img/Typescript.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Typescript</h5>
                    <p className="card-text">Conocimiento básico inicial en Typescript para el desarrollo Web para cliente</p>
                </div>
            </div>
            <div className="card">
                <img src="./img/React.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">React</h5>
                    <p className="card-text">Conocimiento en la librería React para el desarrollo de Apps Web, con el uso de componentes reutilizables y estados de React</p>
                </div>
            </div>
        </div>
    );
}

export default CardGrupo;