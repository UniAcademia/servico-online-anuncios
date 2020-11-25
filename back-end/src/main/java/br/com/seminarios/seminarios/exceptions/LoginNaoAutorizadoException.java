package br.com.seminarios.seminarios.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNAUTHORIZED, reason = "E-mail ou senha não encontrados")
public class LoginNaoAutorizadoException extends GenericException {

	private static final long serialVersionUID = 1L;

}
