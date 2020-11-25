import React from 'react';
import { FiPhone, FiClock } from 'react-icons/fi';
import { GiPositionMarker, GiWorld } from 'react-icons/gi';

import assunta from '../assets/places/assunta-background.jpg';
import './DetailPlace.css';

const DetailPlace = ({selectedPlace}) => {
  return (
    <div className="card-place">
        <img className="img-background-place" src={assunta} alt="assunta" />
          <div className="container-place">
            <h1 className="title-place">{selectedPlace.name}</h1>
            <p className="description-place">Restaurante e bar tem ambientes intimistas contemporâneos de design arrojado e opções autorais diversificadas.</p>

            <div className="info-item-place">
              <GiPositionMarker size={25} color="#000000" className="icon-info-item-place" /> 
              <span className="text-info-item-place">Ladeira Alexandre Leonel, 201 - 301 - São Mateus, Juiz de Fora - MG, 36033-240</span>
            </div>

            <div className="info-item-place">
              <GiWorld size={25} color="#000000" className="icon-info-item-place" /> 
              <span className="text-info-item-place"><a href="/">Acessar Pega Aqui</a></span>
            </div>

            <div className="info-item-place">
              <FiPhone size={25} color="#000000" className="icon-info-item-place" /> 
              <span className="text-info-item-place">(32) 3236-5471</span>
            </div>  

            <div className="info-item-place">
              <FiClock size={25} color="#000000" className="icon-info-item-place" /> 
              <span className="text-info-item-place">Aberto agora:  12:00–23:00</span>
            </div>  
          </div>
    </div>
  );
}

export default DetailPlace;