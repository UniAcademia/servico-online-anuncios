package br.com.seminarios.seminarios.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.seminarios.seminarios.dto.ClienteDTO;
import br.com.seminarios.seminarios.exceptions.ClienteNaoEncontradoException;
import br.com.seminarios.seminarios.model.Cliente;
import br.com.seminarios.seminarios.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;
	
	public ClienteDTO findByEmail(String email) {
		 Cliente clienteResponse = clienteRepository.findByEmail(email).orElseThrow(() -> new ClienteNaoEncontradoException());
		 
		 return new ClienteDTO(clienteResponse);
	}
}
