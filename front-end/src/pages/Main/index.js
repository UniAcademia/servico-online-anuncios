import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn, FiSearch, FiShoppingBag } from 'react-icons/fi';
import { AiOutlineShop } from 'react-icons/ai';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

import DetailPlace from '../../components/DetailPlace';

import './styles.css';
import logo from '../../assets/logo.png';

const markersSelecionados = []

const style = {
    width: '100%',
    height: '100%'
}

const establishments = [
    {
        name: 'Assunta',
        category: 'Amarelo',
        categoryColor: '#FDF569',
        position: {
            lat: -21.7813411,
            lng: -43.3593261
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/yellow.png'
    },
    {
        name: 'Mc Donalds',
        category: 'Roxo',
        categoryColor: '#6991FD',
        position: {
            lat: -21.7790205,
            lng: -43.3520455
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/blue.png'
    },
    {
        name: 'Centauro',
        category: 'Verde',
        categoryColor: '#00E64D',
        position: {
            lat: -21.779431,
            lng: -43.345234
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/green.png',
    },
    {
        name: 'Mr. Tugas',
        category: 'Vermelho',
        categoryColor: '#FD7567',
        position: {
            lat: -21.7865916,
            lng: -43.3427735
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
        name: 'Assunta',
        category: 'Amarelo',
        categoryColor: '#FDF569',
        position: {
            lat: -21.771109,
            lng: -43.352699
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/yellow.png'
    },
    {
        name: 'Mc Donalds',
        category: 'Roxo',
        categoryColor: '#6991FD',
        position: {
            lat: -21.7545151,
            lng: -43.3454486
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/blue.png'
    },
    {
        name: 'Centauro',
        category: 'Verde',
        categoryColor: '#00E64D',
        position: {
            lat: -21.772937,
            lng: -43.352959
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/green.png',
    },
    {
        name: 'Mr. Tugas',
        category: 'Vermelho',
        categoryColor: '#FD7567',
        position: {
            lat: -21.774464,
            lng: -43.353115
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
        name: 'Mr. Tugas',
        category: 'Vermelho',
        categoryColor: '#FD7567',
        position: {
            lat: -21.768763,
            lng: -43.347873
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
        name: 'Centauro',
        category: 'Verde',
        categoryColor: '#00E64D',
        position: {
            lat: -21.769588,
            lng: -43.350027
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/green.png',
    },
    {
        name: 'Mc Donalds',
        category: 'Roxo',
        categoryColor: '#6991FD',
        position: {
            lat: -21.761125,
            lng: -43.348953
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/blue.png'
    },
    {
        name: 'Assunta',
        category: 'Amarelo',
        categoryColor: '#FDF569',
        position: {
            lat: -21.762555,
            lng: -43.355238
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/yellow.png'
    },
    {
        name: 'Mc Donalds',
        category: 'Roxo',
        categoryColor: '#6991FD',
        position: {
            lat: -21.765769,
            lng: -43.353563
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/blue.png'
    },
    {
        name: 'Mr. Tugas',
        category: 'Vermelho',
        categoryColor: '#FD7567',
        position: {
            lat: -21.764533,
            lng: -43.351046
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
        name: 'Centauro',
        category: 'Verde',
        categoryColor: '#00E64D',
        position: {
            lat: -21.7679205,
            lng: -43.3686946
        },
        url: 'https://maps.google.com/mapfiles/ms/icons/green.png',
    },
]

const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

let latitude = null;
let longitude = null;

const Main = ({google}) => {
    const [search, setSearch] = useState(''); 
    const [valueInputSearch, setValueInputSearch] = useState('label simple-form-input__label');
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});
    const [searchList, setSearchList] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState(null);  
    const [map, setMap] = useState({});

    const history = useHistory();

    function handleLogin(){
        history.push('/entrar');
    }

    function handleCadastro(){
        history.push('/cadastrar');
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        }); 
    });

    function mapLoaded(mapProps, map) {
        setMap(map);
        map.setOptions({
            styles: mapStyles
        })
    }

    function checkText(value, funcao){
        if(value.length > 0){
            funcao('label simple-form-input__label simple-form-input__label--has-value');
        } else {
            funcao('label simple-form-input__label');
        } 
    }

    const selectEstablishment = (selectedItem) => {
        setSearchList(false);
        let marker = MarkerPoi.find(marker => JSON.stringify(marker.props.position) === JSON.stringify(selectedItem.position));
        var markerSelecionado = new google.maps.Marker({
            position: { lat: marker.props.position.lat, lng: marker.props.position.lng },
            name: marker.props.name,
            category: marker.props.category,
            categoryColor: marker.props.categoryColor,
            map: map,
            icon: {
                url: marker.props.icon.url,
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(32,32)
            }
        });

        markersSelecionados.push(markerSelecionado)
        onMarkerClick(markerSelecionado, markerSelecionado);
    }
    
    const removeMarker = () => {
        markersSelecionados.forEach((marker) => marker.setMap(null))
    }

    const onMarkerClick = (props, marker) => {
        setSelectedPlace(props);
        setActiveMarker(marker);
        setShowingInfoWindow(true); 
    }

    const onMapClicked = () => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false);
            setActiveMarker(null);
        }
    }

    const MarkerPoi = establishments.map((item, index) => {
        if(item.category === categoryFilter || !categoryFilter){
            return (<Marker 
                        key={index}
                        onClick={onMarkerClick}
                        name={item.name}
                        position={{lat: item.position.lat, lng: item.position.lng}}
                        icon={{
                            url: item.url,
                            anchor: new google.maps.Point(32,32),
                            scaledSize: new google.maps.Size(32,32)
                        }}
                    />
            )
        }
        return true;
    });

    return (
        <div>
            <Map
                google={google}
                zoom={15}
                style={style}
                initialCenter={{
                    lat: latitude || '-21.7714114',
                    lng: longitude || '-43.3509966'
                }}
                onClick={onMapClicked}
                onReady={(mapProps, map) => mapLoaded(mapProps, map)}
                fullscreenControl={false}
                mapTypeControl={false}
                streetViewControl={false}
            > 
                { MarkerPoi }
                
                <InfoWindow
                    marker={activeMarker}
                    visible={showingInfoWindow}
                >
                    <DetailPlace selectedPlace={selectedPlace} />
                </InfoWindow>
            </Map>
            <header className="header">
                <div>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="simple-form-input">
                    <FiSearch size={20} color="#000000" className="icon-search" />
                    <label className={valueInputSearch}>
                        <input 
                            type="text"
                            name="search" 
                            autoComplete="off"
                            className="simple-form-input__field search-input" 
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyUp={e => {
                                checkText(e.target.value, setValueInputSearch);
                                setSearchList(true);
                            }} />
                        <span className="label__name" style={{left: "35px"}}>Busque aqui</span>
                    </label>
                    <ul className="dropdown-search">
                        { searchList && search.length > 0 &&
                        <li className="dropdown-item">
                            <div className="detail-item">
                                <FiSearch size={20} color="#717171" className="icon-item-search" />
                                <span className="item-busca"><b>{search}</b> <div className="divider-search"></div> no Pega Aqui</span>
                            </div>
                        </li>
                        }
                        { searchList && search.length > 0 ?
                            establishments.map((item, index) => {
                                if(item.name.toUpperCase().includes(search.toUpperCase())){
                                    return (<li className="dropdown-item" key={index} onClick={() => selectEstablishment(item)}>
                                        <div className="detail-item">
                                            <AiOutlineShop size={20} color="#717171" className="icon-item-search" />{item.name}
                                        </div>
                                        <div className="detail-item-category">
                                            <div className="color-subtitle-item" style={{background: item.categoryColor }} />
                                            <span className="text-subtitle-item">{item.category}</span>
                                        </div>
                                    </li>)
                                } 
                                return true;
                            }) : ''
                        }
                    </ul>
                </div>
                <div className="buttons-action">
                    <button onClick={handleLogin} className="login-button" type="button"><FiLogIn size={20} color="#000000" className="icon-login" /> Entre aqui</button>
                    <button onClick={handleCadastro} className="cadastrar-button" type="button"><FiShoppingBag size={20} color="#FFFFFF" className="icon-login" /> Cadastre aqui</button>
                </div>
            </header>

            <div className="subtitles">
                <div className="item-subtitle" onClick={() => {setCategoryFilter(null); removeMarker()} }>
                    <div className="color-subtitle" style={{background: '#000000'}} />
                    <span className="text-subtitle">Todos</span>
                </div>
                { establishments.map((item, index) => (
                    <div className="item-subtitle" key={index} onClick={() => {setCategoryFilter(item.category); removeMarker()}}>
                        <div className="color-subtitle" style={{background: item.categoryColor}} />
                        <span className="text-subtitle">{item.category}</span>
                    </div>
                )) }
            </div>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: ''
})(Main);