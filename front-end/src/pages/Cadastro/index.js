import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser, FiCheck } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineShop } from 'react-icons/ai';
import InputMask from 'react-input-mask';
import * as fetchcep from 'cep-promise'
import {useDropzone} from 'react-dropzone';

import './styles.css';
import logo from '../../assets/logo.png';

const iconStep1 = <FiUser size={25} color="#FFFFFF" />
const iconStep2 = <AiOutlineShop size={25} color="#FFFFFF" />
const iconStep3 = <FiCheck size={25} color="#FFFFFF" />

const steps = [
    {
        titulo: 'Etapa 1',
        icone: iconStep1,
        etapa: 1
    },
    {
        titulo: 'Etapa 2',
        icone: iconStep2,
        etapa: 2
    },
    {
        titulo: 'Etapa 3',
        icone: iconStep3,
        etapa: 3
    }
]

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};
  
const activeStyle = {
    borderColor: '#2196f3'
};
  
const acceptStyle = {
    borderColor: '#00e676'
};
  
const rejectStyle = {
    borderColor: '#ff1744'
};

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    justifyContent: 'center'
  };
  
const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 300,
    height: 300,
    padding: 4,
    boxSizing: 'border-box'
};
  
const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};
  
const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const Cadastro = () => {
    const history = useHistory();
    const [email, setEmail] = useState(''); 
    const [validClassEmail, setValidClassEmail] = useState('simple-form-input div-input'); 
    const [formValidEmail, setFormValidEmail] = useState(false); 
    const [valueInputEmail, setValueInputEmail] = useState('label simple-form-input__label');

    const [fullName, setFullName] = useState(''); 
    const [validClassFullName, setValidClassFullName] = useState('simple-form-input div-input'); 
    const [formValidFullName, setFormValidFullName] = useState(false); 
    const [valueInputFullName, setValueInputFullName] = useState('label simple-form-input__label');

    const [cpf, setCpf] = useState(''); 
    const [validClassCpf, setValidClassCpf] = useState('simple-form-input div-input'); 
    const [formValidCpf, setFormValidCpf] = useState(false); 
    const [valueInputCpf, setValueInputCpf] = useState('label simple-form-input__label');

    const [phone, setPhone] = useState(''); 
    const [validClassPhone, setValidClassPhone] = useState('simple-form-input div-input'); 
    const [formValidPhone, setFormValidPhone] = useState(false); 
    const [valueInputPhone, setValueInputPhone] = useState('label simple-form-input__label');

    const [nascimento, setNascimento] = useState(''); 
    const [validClassNascimento, setValidClassNascimento] = useState('simple-form-input div-input'); 
    const [formValidNascimento, setFormValidNascimento] = useState(false); 
    const [valueInputNascimento, setValueInputNascimento] = useState('label simple-form-input__label');

    const [razaoSocial, setRazaoSocial] = useState(''); 
    const [validClassRazaoSocial, setValidClassRazaoSocial] = useState('simple-form-input div-input'); 
    const [formValidRazaoSocial, setFormValidRazaoSocial] = useState(false); 
    const [valueInputRazaoSocial, setValueInputRazaoSocial] = useState('label simple-form-input__label');

    const [nomeFantasia, setNomeFantasia] = useState(''); 
    const [validClassNomeFantasia, setValidClassNomeFantasia] = useState('simple-form-input div-input'); 
    const [formValidNomeFantasia, setFormValidNomeFantasia] = useState(false); 
    const [valueInputNomeFantasia, setValueInputNomeFantasia] = useState('label simple-form-input__label');

    const [cnpj, setCnpj] = useState(''); 
    const [validClassCnpj, setValidClassCnpj] = useState('simple-form-input div-input'); 
    const [formValidCnpj, setFormValidCnpj] = useState(false); 
    const [valueInputCnpj, setValueInputCnpj] = useState('label simple-form-input__label');

    const [telefone, setTelefone] = useState(''); 
    const [validClassTelefone, setValidClassTelefone] = useState('simple-form-input div-input'); 
    const [formValidTelefone, setFormValidTelefone] = useState(false); 
    const [valueInputTelefone, setValueInputTelefone] = useState('label simple-form-input__label');

    const [cep, setCep] = useState(''); 
    const [validClassCep, setValidClassCep] = useState('simple-form-input div-input'); 
    const [formValidCep, setFormValidCep] = useState(false); 
    const [valueInputCep, setValueInputCep] = useState('label simple-form-input__label');

    const [estado, setEstado] = useState(''); 
    const [validClassEstado, setValidClassEstado] = useState('simple-form-input div-input'); 
    const [formValidEstado, setFormValidEstado] = useState(false); 
    const [valueInputEstado, setValueInputEstado] = useState('label simple-form-input__label');

    const [cidade, setCidade] = useState(''); 
    const [validClassCidade, setValidClassCidade] = useState('simple-form-input div-input'); 
    const [formValidCidade, setFormValidCidade] = useState(false); 
    const [valueInputCidade, setValueInputCidade] = useState('label simple-form-input__label');

    const [bairro, setBairro] = useState(''); 
    const [validClassBairro, setValidClassBairro] = useState('simple-form-input div-input'); 
    const [formValidBairro, setFormValidBairro] = useState(false); 
    const [valueInputBairro, setValueInputBairro] = useState('label simple-form-input__label');

    const [endereco, setEndereco] = useState(''); 
    const [validClassEndereco, setValidClassEndereco] = useState('simple-form-input div-input'); 
    const [formValidEndereco, setFormValidEndereco] = useState(false); 
    const [valueInputEndereco, setValueInputEndereco] = useState('label simple-form-input__label');

    const [complemento, setComplemento] = useState(''); 
    const [validClassComplemento, setValidClassComplemento] = useState('simple-form-input div-input'); 
    const [formValidComplemento, setFormValidComplemento] = useState(false); 
    const [valueInputComplemento, setValueInputComplemento] = useState('label simple-form-input__label');

    const [numero, setNumero] = useState(''); 
    const [validClassNumero, setValidClassNumero] = useState('simple-form-input div-input'); 
    const [formValidNumero, setFormValidNumero] = useState(false); 
    const [valueInputNumero, setValueInputNumero] = useState('label simple-form-input__label');

    const[loading, setLoading] = useState(false);
    const[dropDown, setDropDown] = useState('');
    const[category, setCategory] = useState('');

    const [files, setFiles] = useState([]);
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
      } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        }
    });
    
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);
    
    function thumbs () {  
        return (files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img src={file.preview} style={img} alt="logo-estabilishment" />
            </div>
        </div>
        )))
    };

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const [step, setStep] = useState(0);
    const onChange = (nextStep, direction) => {
        
        if(direction === "next"){
            if(validarEtapas(nextStep)){
                document.querySelectorAll('.progress-bar')[nextStep-1].style.width = '100%';
                document.querySelectorAll('.step-container')[nextStep-1].style.display = 'none';
                document.querySelectorAll('.step-container')[nextStep].style.display = 'block';
                document.querySelectorAll('.circle-menu-step')[nextStep].classList.add('complete');
                document.querySelectorAll('.text-menu-step')[nextStep].classList.add('complete');
                setStep(nextStep < 0 ? 0 : nextStep > 2 ? 2 : nextStep);
            }
        } else {
            document.querySelectorAll('.progress-bar')[nextStep].style.width = '0%';
            document.querySelectorAll('.step-container')[nextStep+1].style.display = 'none';
            document.querySelectorAll('.step-container')[nextStep].style.display = 'block';
            document.querySelectorAll('.circle-menu-step')[nextStep+1].classList.remove('complete');
            document.querySelectorAll('.text-menu-step')[nextStep+1].classList.remove('complete');
            setStep(nextStep < 0 ? 0 : nextStep > 2 ? 2 : nextStep);
        }
    };

    const onPrevious = () => step !== 0 && onChange(step - 1, "back");
    const onNext = () => step !== 2 && onChange(step + 1, "next");

    function handleMain(){
        history.push('/');
    }

    function validarEtapas(step) {
        let contador = 0;
        switch (step-1) {
            case 0:
                if(!validar(fullName, setValidClassFullName, setFormValidFullName, 0)){
                    contador++;
                }
                if(!validarEmail(email)){
                    contador++;
                }
                if(!validarCpf(cpf)){
                    contador++;
                }
                if(!validar(phone, setValidClassPhone, setFormValidPhone, 14)){
                    contador++;
                }
                if(!validarDataNascimento(nascimento)){
                    contador++;
                }
                break;
            case 1:
                if(!validar(razaoSocial, setValidClassRazaoSocial, setFormValidRazaoSocial, 0)){
                    contador++;
                }
                if(!validar(nomeFantasia, setValidClassNomeFantasia, setFormValidNomeFantasia, 0)){
                    contador++;
                }
                if(!validarCnpj(cnpj)){
                    contador++;
                }
                if(!validar(telefone, setValidClassTelefone, setFormValidTelefone, 13)){
                    contador++;
                }
                if(!validarCep(cep, false)){
                    contador++
                } else {
                    if(!validar(estado, setValidClassEstado, setFormValidEstado, 0)){
                        contador++;
                    }
                    if(!validar(cidade, setValidClassCidade, setFormValidCidade, 0)){
                        contador++;
                    }
                    if(!validar(bairro, setValidClassBairro, setFormValidBairro, 0)){
                        contador++;
                    }
                    if(!validar(endereco, setValidClassEndereco, setFormValidEndereco, 0)){
                        contador++;
                    }
                    if(!validar(numero, setValidClassNumero, setFormValidNumero, 0)){
                        contador++;
                    }
                }
                break;
            case 2:
                
                break;
            default:
                break;
        }

        if(contador === 0){
            return true;
        }
        return false;
    }

    function validarEmail(value) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)){
            setValidClassEmail('simple-form-input div-input');
            setFormValidEmail(true);
            return true;
        } else {
            setValidClassEmail('simple-form-input div-input simple-form-input--invalid');
            setFormValidEmail(false);
            return false;
        }
    }

    function validar(value, validClass, validForm, length) {
        let tamanho = value.length;
        if(length === 14 || length === 13){
            tamanho = value.replace('_', '').length;
        }
        if (tamanho > length || tamanho === undefined){
            validClass('simple-form-input div-input');
            validForm(true);
            return true;
        } else {
            validClass('simple-form-input div-input simple-form-input--invalid');
            validForm(false);
            return false;
        }
    }

    function checkText(value, funcao){
        if(value.length > 0){
            funcao('label simple-form-input__label simple-form-input__label--has-value');
        } else {
            funcao('label simple-form-input__label');
        } 
    }

    function validarCpf(cpf){
        cpf = cpf.replace(/\D/g, '');
        // eslint-disable-next-line
        if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) {
            setValidClassCpf('simple-form-input div-input simple-form-input--invalid');
            setFormValidCpf(false);
            return false;
        }
        var result = true;
        [9,10].forEach(function(j){
            var soma = 0, r;
            cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
                soma += parseInt(e) * ((j+2)-(i+1));
            });
            r = soma % 11;
            r = (r <2)?0:11-r;
            // eslint-disable-next-line
            if(r != cpf.substring(j, j+1)) result = false;
        });
        if(result){
            setValidClassCpf('simple-form-input div-input');
            setFormValidCpf(true);
            return true;
        } else {
            setValidClassCpf('simple-form-input div-input simple-form-input--invalid');
            setFormValidCpf(false);
            return false;
        }
    }

    function validarDataNascimento(data){
        data = data.replace(/_/g, "").replace(/\//g, "-")
        var data_array = data.split("-");
        // eslint-disable-next-line
        if(data_array[0].length != 4){
           data = data_array[2]+"-"+data_array[1]+"-"+data_array[0];
        }
        
        var hoje = new Date();
        var nasc  = new Date(data);
        var idade = hoje.getFullYear() - nasc.getFullYear();
        var m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

        if(idade >= 18 && data.length > 9){
            setValidClassNascimento('simple-form-input div-input');
            setFormValidNascimento(true);
            return true;
        } else {
            setValidClassNascimento('simple-form-input div-input simple-form-input--invalid');
            setFormValidNascimento(false); 
            return false;
        }
    }

     function validarCnpj(s) {
        let cnpj = s.replace(/[^\d]+/g, '')
    
        if (/^(\d)\1+$/.test(cnpj) || cnpj.length !== 14){
            setValidClassCnpj('simple-form-input div-input simple-form-input--invalid');
            setFormValidCnpj(false); 
            return false;
        }
    
        let t = cnpj.length - 2,
            d = cnpj.substring(t),
            d1 = parseInt(d.charAt(0)),
            d2 = parseInt(d.charAt(1)),
            calc = x => {
                let n = cnpj.substring(0, x),
                    y = x - 7,
                    s = 0,
                    r = 0
    
                    for (let i = x; i >= 1; i--) {
                        s += n.charAt(x - i) * y--;
                        if (y < 2)
                            y = 9
                    }
    
                    r = 11 - s % 11
                    return r > 9 ? 0 : r
            }
        let result = calc(t) === d1 && calc(t + 1) === d2;

        if(result) {
            setValidClassCnpj('simple-form-input div-input');
            setFormValidCnpj(true);
            return true;
        } else {
            setValidClassCnpj('simple-form-input div-input simple-form-input--invalid');
            setFormValidCnpj(false); 
            return false;
        }
    }

    function validarCep(cep, execute) {
        cep = cep.replace(/[^\d]+/g, '')
        
        if(cep.length === 8){
            setValidClassCep('simple-form-input div-input');
            setFormValidCep(true);

            if(execute){
                setLoading(true);
                 fetchcep(cep)
                .then((res) => {
                    setLoading(false);
                    if(res.state !== ""){
                        setValueInputEstado('label simple-form-input__label simple-form-input__label--has-value');
                        setEstado(res.state);
                    }
                    if(res.city !== ""){
                        setCidade(res.city);
                        setValueInputCidade('label simple-form-input__label simple-form-input__label--has-value');
                    }
                    if(res.neighborhood !== ""){
                        setBairro(res.neighborhood);
                        setValueInputBairro('label simple-form-input__label simple-form-input__label--has-value');
                    }
                    if(res.street !== ""){
                        setEndereco(res.street);
                        setValueInputEndereco('label simple-form-input__label simple-form-input__label--has-value');
                    }
                    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${res.street}&key=`)
                    .then(res => 
                        res.json().then(data => console.log(data))
                    ).catch(err => console.log(err))
                }).catch(() => {
                    setValidClassCep('simple-form-input div-input simple-form-input--invalid');
                    setFormValidCep(false); 
                    setLoading(false);
                })
            }
        
            return true;
        } else {
            setValidClassCep('simple-form-input div-input simple-form-input--invalid');
            setFormValidCep(false); 
            return false;
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
            <div className="container-cadastro">
                <div className="d-flex-center">
                { steps.map((item, index) => 
                    <Fragment key={index}>
                        <div className="box-menu-step">
                            <div className={index === 0 ? 'circle-menu-step complete' : 'circle-menu-step'}>{item.icone}</div>
                        </div>
                        { index+1 < steps.length && 
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>}
                    </Fragment>
                )}
                </div>
                <div className="d-flex-center">
                    { steps.map((item, index) => 
                        <Fragment key={index}>
                            <span className={index === 0 ? 'text-menu-step complete' : 'text-menu-step'}>{item.titulo}</span>
                        </Fragment>
                    )}
                </div>
                <div className="box-step">
                    <div className="step-container">
                        <h1>Informe os seus dados pessoais:</h1>
                        <div className="row">
                            <div className={`cadastro ${validClassFullName}`}>
                                <label className={valueInputFullName}>
                                    <input 
                                        type="text"
                                        name="FullName" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input" 
                                        value={fullName}
                                        onChange={e => setFullName(e.target.value)}
                                        onBlur={e => validar(e.target.value, setValidClassFullName, setFormValidFullName, 0)} 
                                        onKeyUp={e => {
                                            validar(e.target.value, setValidClassFullName, setFormValidFullName, 0)
                                            checkText(e.target.value, setValueInputFullName);
                                        }} />
                                    <span className="label__name">Nome completo</span>
                                </label>
                                { !formValidFullName && validClassFullName === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">Nome inválido</span>)
                                }
                            </div>
                            <div className={`cadastro ${validClassEmail}`}>
                                <label className={valueInputEmail}>
                                    <input 
                                        type="text"
                                        name="emailProprietario" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input" 
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        onBlur={e => validarEmail(e.target.value)} 
                                        onKeyUp={e => {
                                            validarEmail(e.target.value);
                                            checkText(e.target.value, setValueInputEmail);
                                        }} />
                                    <span className="label__name">E-mail</span>
                                </label>
                                { !formValidEmail && validClassEmail === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">E-mail inválido</span>)
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className={`cadastro ${validClassCpf}`}>
                                <label className={valueInputCpf}>
                                    <InputMask 
                                        mask="999.999.999-99"
                                        type="text"
                                        name="cpf" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input"  
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                        onBlur={e => validarCpf(e.target.value)} 
                                        onKeyUp={e => {
                                            validarCpf(e.target.value);
                                            checkText(e.target.value, setValueInputCpf);
                                        }} />
                                    <span className="label__name">CPF</span>
                                </label>
                                { !formValidCpf && validClassCpf === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">CPF inválido</span>)
                                }
                            </div>
                            <div className={`cadastro ${validClassPhone}`}>
                                <label className={valueInputPhone}>
                                    <InputMask 
                                        mask="(99) 99999-9999"
                                        type="text"
                                        name="celular" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input"  
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        onBlur={e => validar(e.target.value, setValidClassPhone, setFormValidPhone, 14)} 
                                        onKeyUp={e => {
                                            validar(e.target.value, setValidClassPhone, setFormValidPhone, 14)
                                            checkText(e.target.value, setValueInputPhone);
                                        }} />
                                    <span className="label__name">Celular (com DDD)</span>
                                </label>
                                { !formValidPhone && validClassPhone === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">Celular inválido</span>)
                                }
                            </div>
                            <div className={`cadastro ${validClassNascimento}`}>
                                <label className={valueInputNascimento}>
                                    <InputMask 
                                        mask="99/99/9999"
                                        type="text"
                                        name="nascimento" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input"  
                                        value={nascimento}
                                        onChange={e => setNascimento(e.target.value)}
                                        onBlur={e => validarDataNascimento(e.target.value)} 
                                        onKeyUp={e => {
                                            validarDataNascimento(e.target.value);
                                            checkText(e.target.value, setValueInputNascimento);
                                        }} />
                                    <span className="label__name">Data de nascimento</span>
                                </label>
                                { !formValidNascimento && validClassNascimento === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">É necessário ter no mínimo 18 anos</span>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="step-container" style={{display: 'none'}}>
                        <h1>Informe os seus dados do seu estabelecimento:</h1>
                        <div className="row">
                            <div className={`cadastro ${validClassRazaoSocial}`}>
                                <label className={valueInputRazaoSocial}>
                                    <input 
                                        type="text"
                                        name="razaoSocial" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input" 
                                        value={razaoSocial}
                                        onChange={e => setRazaoSocial(e.target.value)}
                                        onBlur={e => validar(e.target.value, setValidClassRazaoSocial, setFormValidRazaoSocial, 0)} 
                                        onKeyUp={e => {
                                            validar(e.target.value, setValidClassRazaoSocial, setFormValidRazaoSocial, 0)
                                            checkText(e.target.value, setValueInputRazaoSocial);
                                        }} />
                                    <span className="label__name">Razão social</span>
                                </label>
                                { !formValidRazaoSocial && validClassRazaoSocial === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">Razão social inválido</span>)
                                }
                            </div>
                            <div className={`cadastro ${validClassNomeFantasia}`}>
                                <label className={valueInputNomeFantasia}>
                                    <input 
                                        type="text"
                                        name="nomeFantasia" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input" 
                                        value={nomeFantasia}
                                        onChange={e => setNomeFantasia(e.target.value)}
                                        onBlur={e => validar(e.target.value, setValidClassNomeFantasia, setFormValidNomeFantasia, 0)} 
                                        onKeyUp={e => {
                                            validar(e.target.value, setValidClassNomeFantasia, setFormValidNomeFantasia, 0)
                                            checkText(e.target.value, setValueInputNomeFantasia);
                                        }} />
                                    <span className="label__name">Nome fantasia</span>
                                </label>
                                { !formValidNomeFantasia && validClassNomeFantasia === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">Nome fantasia inválido</span>)
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className={`cadastro ${validClassCnpj}`}>
                                <label className={valueInputCnpj}>
                                    <InputMask
                                        mask="99.999.999/9999-99"
                                        type="text"
                                        name="cnpj" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input"  
                                        value={cnpj}
                                        onChange={e => setCnpj(e.target.value)}
                                        onBlur={e => validarCnpj(e.target.value)} 
                                        onKeyUp={e => {
                                            validarCnpj(e.target.value);
                                            checkText(e.target.value, setValueInputCnpj);
                                        }} />
                                    <span className="label__name">CNPJ</span>
                                </label>
                                { !formValidCnpj && validClassCnpj === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">CNPJ inválido</span>)
                                }
                            </div>
                            <div className={`cadastro ${validClassTelefone}`}>
                                <label className={valueInputTelefone}>
                                    <InputMask 
                                        mask="(99) 9999-9999"
                                        type="text"
                                        name="telefone" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input"  
                                        value={telefone}
                                        onChange={e => setTelefone(e.target.value)}
                                        onBlur={e => validar(e.target.value, setValidClassTelefone, setFormValidTelefone, 13)} 
                                        onKeyUp={e => {
                                            validar(e.target.value, setValidClassTelefone, setFormValidTelefone, 13)
                                            checkText(e.target.value, setValueInputTelefone);
                                        }} />
                                    <span className="label__name">Telefone (com DDD)</span>
                                </label>
                                { !formValidTelefone && validClassTelefone === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">Telefone inválido</span>)
                                }
                            </div>
                            <div className={`cadastro ${validClassCep}`}>
                                <label className={valueInputCep}>
                                    <InputMask 
                                        mask="99999-999"
                                        type="text"
                                        name="cepEstabelecimento" 
                                        autoComplete="off"
                                        className="simple-form-input__field login-input"  
                                        value={cep}
                                        onChange={e => setCep(e.target.value)}
                                        onBlur={e => validarCep(e.target.value, false)} 
                                        onKeyUp={e => {
                                            validarCep(e.target.value, true)
                                            checkText(e.target.value, setValueInputCep);
                                        }} />
                                    <span className="label__name">CEP</span>
                                </label>
                                { !formValidCep && validClassCep === "simple-form-input div-input simple-form-input--invalid" &&
                                    (<span className="simple-form-input__error" role="alert">CEP inválido</span>)
                                }
                            </div>
                        </div>
                        {loading &&
                        <div className="div-loading" style={{'--n': 5}}>
                            <div className="dot" style={{'--i': 0}}></div>
                            <div className="dot" style={{'--i': 1}}></div>
                            <div className="dot" style={{'--i': 2}}></div>
                            <div className="dot" style={{'--i': 3}}></div>
                            <div className="dot" style={{'--i': 4}}></div>
                        </div>
                        }
                        <div className="box-cep-found" style={estado !== '' ? {maxHeight: '500px'} : {}}>
                            <div className="row">
                                <div className={`cadastro ${validClassEstado}`}>
                                    <label className={valueInputEstado}>
                                        <input 
                                            type="text"
                                            name="estado" 
                                            autoComplete="off"
                                            className="simple-form-input__field login-input" 
                                            value={estado}
                                            onChange={e => setEstado(e.target.value)}
                                            onBlur={e => validar(e.target.value, setValidClassEstado, setFormValidEstado, 0)} 
                                            onKeyUp={e => {
                                                validar(e.target.value, setValidClassEstado, setFormValidEstado, 0)
                                                checkText(e.target.value, setValueInputEstado);
                                            }} />
                                        <span className="label__name">Estado</span>
                                    </label>
                                    { !formValidEstado && validClassEstado === "simple-form-input div-input simple-form-input--invalid" &&
                                        (<span className="simple-form-input__error" role="alert">Estado inválido</span>)
                                    }
                                </div>
                                <div className={`cadastro ${validClassCidade}`}>
                                    <label className={valueInputCidade}>
                                        <input 
                                            type="text"
                                            name="cidade" 
                                            autoComplete="off"
                                            className="simple-form-input__field login-input" 
                                            value={cidade}
                                            onChange={e => setCidade(e.target.value)}
                                            onBlur={e => validar(e.target.value, setValidClassCidade, setFormValidCidade, 0)} 
                                            onKeyUp={e => {
                                                validar(e.target.value, setValidClassCidade, setFormValidCidade, 0)
                                                checkText(e.target.value, setValueInputCidade);
                                            }} />
                                        <span className="label__name">Cidade</span>
                                    </label>
                                    { !formValidCidade && validClassCidade === "simple-form-input div-input simple-form-input--invalid" &&
                                        (<span className="simple-form-input__error" role="alert">Cidade inválida</span>)
                                    }
                                </div>
                                <div className={`cadastro ${validClassBairro}`}>
                                    <label className={valueInputBairro}>
                                        <input 
                                            type="text"
                                            name="bairro" 
                                            autoComplete="off"
                                            className="simple-form-input__field login-input" 
                                            value={bairro}
                                            onChange={e => setBairro(e.target.value)}
                                            onBlur={e => validar(e.target.value, setValidClassBairro, setFormValidBairro, 0)} 
                                            onKeyUp={e => {
                                                validar(e.target.value, setValidClassBairro, setFormValidBairro, 0)
                                                checkText(e.target.value, setValueInputBairro);
                                            }} />
                                        <span className="label__name">Bairro</span>
                                    </label>
                                    { !formValidBairro && validClassBairro === "simple-form-input div-input simple-form-input--invalid" &&
                                        (<span className="simple-form-input__error" role="alert">Bairro inválido</span>)
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className={`cadastro ${validClassEndereco}`}>
                                    <label className={valueInputEndereco}>
                                        <input 
                                            type="text"
                                            name="endereco" 
                                            autoComplete="off"
                                            className="simple-form-input__field login-input" 
                                            value={endereco}
                                            onChange={e => setEndereco(e.target.value)}
                                            onBlur={e => validar(e.target.value, setValidClassEndereco, setFormValidEndereco, 0)} 
                                            onKeyUp={e => {
                                                validar(e.target.value, setValidClassEndereco, setFormValidEndereco, 0)
                                                checkText(e.target.value, setValueInputEndereco);
                                            }} />
                                        <span className="label__name">Endereço</span>
                                    </label>
                                    { !formValidEndereco && validClassEndereco === "simple-form-input div-input simple-form-input--invalid" &&
                                        (<span className="simple-form-input__error" role="alert">Endereço inválido</span>)
                                    }
                                </div>
                                <div className={`cadastro ${validClassComplemento}`}>
                                    <label className={valueInputComplemento}>
                                        <input 
                                            type="text"
                                            name="complemento"
                                            maxLength="8"
                                            autoComplete="off"
                                            className="simple-form-input__field login-input" 
                                            value={complemento}
                                            onChange={e => setComplemento(e.target.value)}
                                            onBlur={e => validar(e.target.value, setValidClassComplemento, setFormValidComplemento, 0)} 
                                            onKeyUp={e => {
                                                validar(e.target.value, setValidClassComplemento, setFormValidComplemento, 0)
                                                checkText(e.target.value, setValueInputComplemento);
                                            }} />
                                        <span className="label__name">Complemento</span>
                                    </label>
                                    { !formValidComplemento && validClassComplemento === "simple-form-input div-input simple-form-input--invalid" &&
                                        (<span className="simple-form-input__error" role="alert">Complemento inválido</span>)
                                    }
                                </div>
                                <div className={`cadastro ${validClassNumero}`}>
                                    <label className={valueInputNumero}>
                                        <input
                                            type="text"
                                            name="numero"
                                            autoComplete="off"
                                            className="simple-form-input__field login-input" 
                                            value={numero}
                                            onChange={e => setNumero(parseInt(e.target.value) ? parseInt(e.target.value) : '')}
                                            onBlur={e => validar(e.target.value, setValidClassNumero, setFormValidNumero, 0)} 
                                            onKeyUp={e => {
                                                validar(e.target.value, setValidClassNumero, setFormValidNumero, 0)
                                                checkText(e.target.value, setValueInputNumero);
                                            }} />
                                        <span className="label__name">Número</span>
                                    </label>
                                    { !formValidNumero && validClassNumero === "simple-form-input div-input simple-form-input--invalid" &&
                                        (<span className="simple-form-input__error" role="alert">Número inválido</span>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step-container" style={{display: 'none'}}>
                        <h1>Para finalizar</h1>
                        <div className="row" style={{position: 'relative'}}>
                            <div style={{width: '100%'}}>
                                <label>Categoria de seu estabelecimento</label>
                                <button 
                                    className="dropdown-button-category" 
                                    type="button"
                                    onClick={() => dropDown === '' ? setDropDown('show') : setDropDown('')}
                                >{category}</button>
                                <RiArrowDropDownLine size={30} color="#000000" className="dropdown-icon-category" />
                            </div>
                            <div className={`dropdown-menu-category ${dropDown}`}>
                                <span className="dropdown-item-category" onClick={() => {setCategory('Primeira'); setDropDown('');}}>Primeira</span>
                                <span className="dropdown-item-category" onClick={() => {setCategory('Segunda'); setDropDown('');}}>Segunda</span>
                                <span className="dropdown-item-category" onClick={() => {setCategory('Terceira'); setDropDown('');}}>Terceira</span>
                                <span className="dropdown-item-category" onClick={() => {setCategory('Quarta'); setDropDown('');}}>Quarta</span>
                                <span className="dropdown-item-category" onClick={() => {setCategory('Quinta'); setDropDown('');}}>Quinta</span>
                            </div>
                        </div>
                        <div className="row">
                            <div {...getRootProps({style})}>
                                <input {...getInputProps()} />
                                <p>Envie aqui a logo do seu estabelecimento</p>
                            </div>
                        </div>
                        <aside style={thumbsContainer}>
                            {thumbs()}
                        </aside>
                    </div>
                    <div className="box-buttons-steps">
                        <button type="button" className="next-button" onClick={onPrevious}>Voltar</button>
                        <button type="button" className="next-button" onClick={onNext}>{ step === 2 ? 'Finalizar' : 'Avançar' }</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;