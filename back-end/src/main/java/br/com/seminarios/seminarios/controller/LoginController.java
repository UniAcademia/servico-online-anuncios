package br.com.seminarios.seminarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.seminarios.seminarios.dto.LoginDTO;
import br.com.seminarios.seminarios.service.LoginService;

@RestController
@RequestMapping(path = "/login")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping()
    public boolean autenticar(@RequestBody LoginDTO loginDTO) {
		return loginService.autenticar(loginDTO);
    }
}
