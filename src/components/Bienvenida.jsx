import React from 'react';

const Card = (props) =>{
   const {imagen, titulo, texto} = props
    return (
        <div className='card' style={{width:"13rem", border:'1px solid red'}}>
            <img src={imagen} className='card-img-top img-thumbnail' alt='...'/>
            <div className='card-body'>
                <h5 className='card-title'>{titulo}</h5>
                <p className='card-text'>{texto}</p>
                <a href='#' className='btn btn-primary'>Ver mas</a>
            </div>
        </div>
    )
}

export default Card;
/*
Colocar esto en el app.jsx para ver una cuadricula de imagenes.

<div className="container">
      
       <div className='row'>
        <div className='col'>
          <Card
          imagen='https://picsum.photos/640/360'
          titulo='Titulo Card 1'
          texto='Texto Card 1'>
          </Card>
        </div>
        <div className='col'>
          <Card
          imagen='https://placebear.com/640/360'
          titulo='Titulo Card 2'
          texto='Texto Card 2'>
          </Card>
        </div>
        <div className='col'>
          <Card
          imagen='https://placekitten.com/640/360'
          titulo='Titulo Card 3'
          texto='Texto Card 3'>
          </Card>
        </div>
      </div>      
    </div>*/
