package br.com.seminarios.seminarios.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.seminarios.seminarios.dto.ClienteDTO;
import br.com.seminarios.seminarios.service.ClienteService;

@RestController
@RequestMapping(path = "/cliente")
public class ClienteController {
	
	@Autowired
	private ClienteService clienteService;
	
	@GetMapping("/{email}")
    public ClienteDTO buscar(@PathVariable("email") String email) {
		return clienteService.findByEmail(email);
    }
	
}
