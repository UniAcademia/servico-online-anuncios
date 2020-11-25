package br.com.seminarios.seminarios.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR, reason = "RCBE.PORTAL.ERRO.INTERNO.SERVIDOR")
public class GenericException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public GenericException() {
        super();
    }

    public GenericException(Exception e) {
        super(e);
    }

    public GenericException(String m) {
        super(m);
    }

}

