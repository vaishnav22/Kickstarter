import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const CardExampleExtraContent = (data, index) => {
    return <React.Fragment>
        <h1>Welcom to my channel</h1>
        <div className="container text-center">
        <div className="col">
            <div className="row">
            <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">{data.header}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>

}

export default CardExampleExtraContent