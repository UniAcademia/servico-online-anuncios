package br.com.seminarios.seminarios.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Cliente não encontrado")
public class ClienteNaoEncontradoException extends GenericException {

	private static final long serialVersionUID = 1L;

}
