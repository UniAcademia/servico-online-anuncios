import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.png';
import loginImage from '../../assets/login-image-bg.png';

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [validClassEmail, setValidClassEmail] = useState('simple-form-input div-input'); 
    const [validClassPassword, setValidClassPassword] = useState('simple-form-input div-input');
    const [formValidEmail, setFormValidEmail] = useState(false); 
    const [formValidPassword, setFormValidPassword] = useState(false); 
    const [valueInputEmail, setValueInputEmail] = useState('label simple-form-input__label');
    const [valueInputPassword, setValueInputPassword] = useState('label simple-form-input__label');

    const history = useHistory();

    function handleMain(){
        history.push('/');
    }

    function handleCadastro(){
        history.push('/cadastrar');
    }

    function checkText(value, funcao){
        if(value.length > 0){
            funcao('label simple-form-input__label simple-form-input__label--has-value');
        } else {
            funcao('label simple-form-input__label');
        } 
    }

    function validarEmail(value) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)){
            setValidClassEmail('simple-form-input div-input');
            setFormValidEmail(true);
        } else {
            setValidClassEmail('simple-form-input div-input simple-form-input--invalid');
            setFormValidEmail(false);
        }
    }

    function validarPassword(value) {
        if (value.length > 0){
            setValidClassPassword('simple-form-input div-input');
            setFormValidPassword(true);
        } else {
            setValidClassPassword('simple-form-input div-input simple-form-input--invalid');
            setFormValidPassword(false);
        }
    }

    function handleSubmit(){
        if(!formValidEmail && !formValidPassword){
            setValidClassEmail('simple-form-input div-input simple-form-input--invalid');
            setValidClassPassword('simple-form-input div-input simple-form-input--invalid');
        } else if(!formValidEmail){
            setValidClassEmail('simple-form-input div-input simple-form-input--invalid');
        } else if(!formValidPassword){
            setValidClassPassword('simple-form-input div-input simple-form-input--invalid');
        } else {
            api.post('login', {
                email,
                senha: password    
            }).then((result) => {
                api.get(`cliente/${email}`)
                .then((result) => {
                    console.log(result)
                }).catch((error) => {
                    console.log(error)
                });
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    return (
        <div className="main-layout">
            <header className="header no-padding no-background">
                <div className="container-header">
                    <div onClick={handleMain}>
                        <img src={logo} alt="Logo" className="logo" />
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="image-box">
                    <img src={loginImage} alt="Login" className="login-image" />
                </div>
                <div className="login-box">
                    <h2 className="title-text">Entre aqui com seu e-mail e senha</h2>
                    <div className={validClassEmail}>
                        <label className={valueInputEmail}>
                            <input 
                                type="text"
                                name="email" 
                                autoComplete="off"
                                className="simple-form-input__field login-input" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                onBlur={e => validarEmail(e.target.value)} 
                                onKeyUp={e => {
                                    validarEmail(e.target.value);
                                    checkText(e.target.value, setValueInputEmail);
                                }} />
                            <span className="label__name">Seu e-mail</span>
                        </label>
                        { !formValidEmail && validClassEmail === "simple-form-input div-input simple-form-input--invalid" &&
                            (<span className="simple-form-input__error" role="alert">E-mail inválido</span>)
                        }
                    </div>

                    <div className={validClassPassword}>
                        <label className={valueInputPassword}>
                        <input 
                            type="password"
                            name="password" 
                            autoComplete="off"
                            className="simple-form-input__field login-input" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            onBlur={e => validarPassword(e.target.value)}
                            onKeyUp={e => {
                                validarPassword(e.target.value);
                                checkText(e.target.value, setValueInputPassword);
                            }} />
                            <span className="label__name">Sua senha</span>
                        </label>
                        { !formValidPassword && validClassPassword === "simple-form-input div-input simple-form-input--invalid" &&
                            (<span className="simple-form-input__error" role="alert">Senha inválida</span>)
                        }
                    </div>
                    
                    <button className="entrar-button" type="button" onClick={handleSubmit}>Entrar</button>

                    <div className="box-cadastro">
                        <p style={{fontSize: '14px'}}>Seu estabelecionamento ainda não está cadastrado?</p> 
                        <button className="link-cadastro" onClick={handleCadastro}>Cadastrar agora!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;