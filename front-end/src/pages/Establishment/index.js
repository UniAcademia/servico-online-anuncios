import React, { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { FiLogIn, FiShoppingBag, FiPhone, FiMail } from 'react-icons/fi';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { GiPositionMarker } from 'react-icons/gi';

import { useHistory } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.png';

const Establishment = () => {
    const [horarios, setHorarios] = useState(false); 
    const [modal, setModal] = useState(false); 
    const [loading, setLoading] = useState(true); 
    const [isSlider, setIsSlider] = useState(true); 

    const history = useHistory();

    function handleMain(){
        history.push('/');
    }

    function handleLogin(){
        history.push('/entrar');
    }

    function handleCadastro(){
        history.push('/cadastrar');
    }

    function handleHorarios() {
        if(horarios){
            setHorarios(false);
        } else {
            setHorarios(true);
        }
    }

    function handleSlider() {
        if(isSlider){
            setIsSlider(false);
        } else {
            setIsSlider(true);
        }
       // document.querySelector('.total-items-category').style.maxHeight = document.querySelector('.total-items-category').offsetHeight;
    }

    function showModal(){
        setLoading(false);
        setModal(true);
    }

    function calculateTextWidth(text) {
        const span = document.createElement('span');
        span.innerText = text;
    
        document.body.appendChild(span);
        const width = span.offsetWidth;
        span.parentNode.removeChild(span);
    
        return width+width/2;
    }

    function scrollToCategory(refCategory, position) {
        document.querySelectorAll('.category-menu-item').forEach((menu) => menu.classList.remove('menu-selected'));
        document.querySelectorAll('.category-menu-item')[position].classList.add('menu-selected');
        document.getElementById(refCategory).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    return (
        <div>
            <header className="header no-padding">
                <div className="container-header">
                    <div onClick={handleMain}>
                        <img src={logo} alt="Logo" className="logo" />
                    </div>
                    <div className="buttons-action">
                        <button onClick={handleLogin} className="login-button" type="button"><FiLogIn size={20} color="#3f3e3e" className="icon-login" /> Entre aqui</button>
                        <button onClick={handleCadastro} className="cadastrar-button" type="button"><FiShoppingBag size={20} color="#FFFFFF" className="icon-login" /> Cadastre aqui</button>
                    </div>
                </div>
            </header>
            <div>
                <div className="container-establishment">
                    <div className="header-info">
                        <div className="logo-establishment">
                            <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/201808111651_e0e81596-e253-49e9-8b88-bb044cacb14b.jpg" alt="Logotipo Mcdonald's - Bom Pastor(bpa)" />
                        </div>
                        <div className="info-establishment">
                            <h1 className="title-establishment">Mcdonald's - Bom Pastor(bpa)</h1>
                            <p>Líder no segmento de serviço rápido de alimentação, o McDonalds se destaca pela qualidade dos produtos e do atendimento. Sempre temos uma Mc Oferta especial (promoção) de Hamburguer, lanches, sanduíche, batata e sorvete. Aproveite!</p>
                            <div className="category-establishment">
                                <div className="color-subtitle-item" style={{background: '#FD7567' }} />
                                <p className="text-subtitle-item">Vermelho • 0.16 km</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div className="info-details-establishment">
                                    <div className="box-title-dropdown-details" onClick={() => handleHorarios()}>
                                        <span className="text-title-details">
                                            Horários de funcionamento  
                                        </span>
                                        { horarios ? <RiArrowDropUpLine size={30} color="#595856" className="icon-dropdown" /> : <RiArrowDropDownLine size={30} color="#595856" className="icon-dropdown" /> }
                                    </div>
                                    <div className={ horarios ? "list-more-details show" : "list-more-details hide"}>
                                        <div className="container-horario">
                                            <span className="day-of-week">Segunda</span>
                                            <span>00:00 às 01:00 - 09:00 às 23:59</span>
                                        </div>
                                        <div className="container-horario">
                                            <span className="day-of-week">Terça</span>
                                            <span>00:00 às 01:00 - 09:00 às 23:59</span>
                                            </div>
                                        <div className="container-horario">
                                            <span className="day-of-week">Quarta</span>
                                            <span>00:00 às 01:00 - 09:00 às 23:59</span>
                                            </div>
                                        <div className="container-horario">
                                            <span className="day-of-week">Quinta</span>
                                            <span>00:00 às 01:00 - 09:00 às 23:59</span>
                                            </div>
                                        <div className="container-horario">
                                            <span className="day-of-week">Sexta</span>
                                            <span>00:00 às 01:00 - 09:00 às 23:59</span>
                                            </div>
                                        <div className="container-horario">
                                            <span className="day-of-week">Sábado</span>
                                            <span>00:00 às 01:00 - 09:00 às 23:59</span>
                                            </div>
                                        <div className="container-horario">
                                            <span className="day-of-week">Domingo</span>
                                            <span>00:00 às 01:00 - 09:00 às 23:59</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-details-establishment">
                                    <div className="box-title-dropdown-details" onClick={() => handleHorarios()}>
                                        <span className="text-title-details">
                                            Informações  
                                        </span>
                                        { horarios ? <RiArrowDropUpLine size={30} color="#595856" className="icon-dropdown" /> : <RiArrowDropDownLine size={30} color="#595856" className="icon-dropdown" /> }
                                    </div>
                                    <div className={ horarios ? "list-more-details show" : "list-more-details hide"}>
                                        <div className="container-info-details">
                                            <GiPositionMarker size={36} color="#3f3e3e" />
                                            <span className="text-info-detail">Ladeira Alexandre Leonel, 201 - 301 - São Mateus, Juiz de Fora - MG, 36033-240</span>
                                        </div>
                                        <div className="container-info-details">
                                            <FiPhone size={25} color="#3f3e3e" />
                                            <span className="text-info-detail">(32) 3236-5471</span>
                                        </div>
                                        <div className="container-info-details">
                                            <FiMail size={25} color="#3f3e3e" />
                                            <span className="text-info-detail">contato@mcdonalds.com.br</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    { !modal &&
                        <div className="category-menu">
                            <ScrollContainer className="scroll-container">
                                <div onClick={() => scrollToCategory('Categoria para testar o redirecionamento 1', 0)} className="category-menu-item menu-selected" style={{minWidth: calculateTextWidth('Categoria para testar o redirecionamento 1')}}>Categoria para testar o redirecionamento 1</div>
                                <div onClick={() => scrollToCategory('Categoria para testar o redirecionamento 2', 1)} className="category-menu-item" style={{minWidth: calculateTextWidth('Categoria para testar o redirecionamento 2')}}>Categoria para testar o redirecionamento 2</div>
                                <div onClick={() => scrollToCategory('Categoria para testar o redirecionamento 3', 2)} className="category-menu-item" style={{minWidth: calculateTextWidth('Categoria para testar o redirecionamento 3')}}>Categoria para testar o redirecionamento 3</div>
                                <div onClick={() => scrollToCategory('Redirecionamento', 3)} className="category-menu-item" style={{minWidth: calculateTextWidth('Redirecionamento')}}>Redirecionamento</div>
                            </ScrollContainer>
                        </div>
                    }
                    <div id="Categoria para testar o redirecionamento 1" className="group-category-establishment">
                        <h2 className="title-group-items" onClick={() => handleSlider()}>
                            Categoria para testar o redirecionamento 1
                            { !isSlider ? <RiArrowDropUpLine size={35} color="#595856" className="icon-dropdown" /> : <RiArrowDropDownLine size={30} color="#595856" className="icon-dropdown" /> }
                            <span className="box-hover-title">{ isSlider ? 'Ver todos' : 'Voltar'}</span>
                        </h2>
                            
                        {isSlider ?
                        <ScrollContainer className="scroll-container-products">
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollContainer>
                        : <>
                            <div className="group-items">
                                <div className="container-item">
                                    <div onClick={showModal} className="link-item">
                                        <div className="box-image">
                                            <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                        </div>
                                        <div className="box-info-item">
                                            <span className="title-item">Combo dos clássicos</span>
                                            <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                        </div>
                                        <div className="price-item">
                                            <span className="text-price-item">A partir de R$ 34,90</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-item">
                                    <div onClick={showModal} className="link-item">
                                        <div className="box-image">
                                            <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                        </div>
                                        <div className="box-info-item">
                                            <span className="title-item">Combo dos clássicos</span>
                                            <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                        </div>
                                        <div className="price-item">
                                            <span className="text-price-item">A partir de R$ 34,90</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-item">
                                    <div onClick={showModal} className="link-item">
                                        <div className="box-image">
                                            <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                        </div>
                                        <div className="box-info-item">
                                            <span className="title-item">Combo dos clássicos</span>
                                            <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                        </div>
                                        <div className="price-item">
                                            <span className="text-price-item">A partir de R$ 34,90</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-items">
                                <div className="container-item">
                                    <div onClick={showModal} className="link-item">
                                        <div className="box-image">
                                            <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                        </div>
                                        <div className="box-info-item">
                                            <span className="title-item">Combo dos clássicos</span>
                                            <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                        </div>
                                        <div className="price-item">
                                            <span className="text-price-item">A partir de R$ 34,90</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-item">
                                    <div onClick={showModal} className="link-item">
                                        <div className="box-image">
                                            <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                        </div>
                                        <div className="box-info-item">
                                            <span className="title-item">Combo dos clássicos</span>
                                            <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                        </div>
                                        <div className="price-item">
                                            <span className="text-price-item">A partir de R$ 34,90</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-auxiliar"></div>
                            </div>
                          </>
                        }
                    </div>
                    <div id="Categoria para testar o redirecionamento 2" className="group-category-establishment">
                        <h2 className="title-group-items">Categoria para testar o redirecionamento 2</h2>
                        <div className="group-items">
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group-items">
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="Categoria para testar o redirecionamento 3" className="group-category-establishment">
                        <h2 className="title-group-items">Categoria para testar o redirecionamento 3</h2>
                        <div className="group-items">
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="Redirecionamento" className="group-category-establishment">
                        <h2 className="title-group-items">Redirecionamento</h2>
                        <div className="group-items">
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-item">
                                <div onClick={showModal} className="link-item">
                                    <div className="box-image">
                                        <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item" />
                                    </div>
                                    <div className="box-info-item">
                                        <span className="title-item">Combo dos clássicos</span>
                                        <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão...</span>
                                    </div>
                                    <div className="price-item">
                                        <span className="text-price-item">A partir de R$ 34,90</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { !loading && 
                <div className={`modal ${modal ? 'showModal' : 'hideModal'}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">                           
                            <div className="modal-body">
                                <div className="header-image-modal">
                                    <img alt="Combo dos clássicos" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/202002270857_ZjqV_c.png" className="image-item-modal" />
                                </div>
                                <div className="box-info-item">
                                    <span className="title-item">Combo dos clássicos</span>
                                    <span className="description-item">Escolha 2(dois) sanduíches entre as opções: Big Mac, cheddar, quarterão, McChicken, duplo burger bacon, duplo barbecue ou triplo cheeseburger, 1 (um) McFritas média e 1 (um) bebida.</span>
                                    <span className="text-price-item-modal">A partir de R$ 34,90</span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="close-modal" onClick={() => setModal(false)}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }   
        </div>
    );
}

export default Establishment;